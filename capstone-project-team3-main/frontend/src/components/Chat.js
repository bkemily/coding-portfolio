import React, { useState, useEffect } from "react";
import "../css/Chat.css";
import CreatePostModal from "./CreatePostModal";
import CommentForm from "./CommentForm";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

export default function Chat({ user }) {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [likingPostIds, setLikingPostIds] = useState(new Set());
  const [likedStatus, setLikedStatus] = useState({});
  const [expandedComments, setExpandedComments] = useState(new Set()); // For expandable comments

  // State variables for geolocation and radius filtering.
  const [coordinates, setCoordinates] = useState(null);
  const [radius, setRadius] = useState(5); // Default radius in miles.
  const [geoError, setGeoError] = useState(null);

  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  // Get user coordinates on mount.
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setCoordinates(coords);
        },
        (error) => {
          console.error("Error obtaining location:", error);
          setGeoError("You cannot use the application without providing your coordinates.");
        }
      );
    } else {
      setGeoError("Geolocation is not supported by this browser.");
    }
  }, []);

  // Load likedStatus from localStorage.
  useEffect(() => {
    if (user) {
      const stored = localStorage.getItem(`likedStatus_${user.email}`);
      if (stored) setLikedStatus(JSON.parse(stored));
    }
  }, [user]);

  // Fetch posts whenever coordinates or the radius change.
  // The backend should read these from req.query since GET requests don't carry a body.
  useEffect(() => {
    if (!coordinates) return;
    (async () => {
      setIsLoading(true);
      try {
        const url = `${process.env.REACT_APP_API_URL}/api/get-posts?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&radius=${radius}`;
        const res = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (data.success) {
          setPosts(
            data.data.map((post) => ({
              ...post,
              timeStamp: new Date(post.timeStamp).toLocaleString(),
            }))
          );
        } else {
          setMessage({
            type: "error",
            text: data.message || "Failed to fetch posts.",
          });
        }
      } catch {
        setMessage({
          type: "error",
          text: "Failed to fetch posts. Please try again later.",
        });
      } finally {
        setIsLoading(false);
      }
    })();
  }, [coordinates, radius]);

  // Toggle like on a post.
  const handleToggleLike = async (postId) => {
    if (likingPostIds.has(postId)) return;
    setLikingPostIds((prev) => new Set(prev).add(postId));

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/toggle-like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, email: user.email }),
      });
      const data = await res.json();

      if (data.success) {
        setPosts((prev) =>
          prev.map((p) =>
            p._id === postId
              ? {
                  ...p,
                  likes: data.data.likes,
                  likeCount: data.data.likeCount,
                  timeStamp: new Date(data.data.timeStamp).toLocaleString(),
                }
              : p
          )
        );
        setLikedStatus((prev) => {
          const newStatus = { ...prev, [postId]: !prev[postId] };
          localStorage.setItem(`likedStatus_${user.email}`, JSON.stringify(newStatus));
          return newStatus;
        });
      } else {
        setMessage({
          type: "error",
          text: data.message || "Failed to toggle like.",
        });
      }
    } catch {
      setMessage({
        type: "error",
        text: "Failed to toggle like. Try again later.",
      });
    } finally {
      setLikingPostIds((prev) => {
        const next = new Set(prev);
        next.delete(postId);
        return next;
      });
    }
  };

  // Add a comment to a post.
  const handleComment = async (postId, commentText) => {
    if (!commentText.trim()) {
      setMessage({ type: "error", text: "Comment cannot be empty." });
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/create-comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postId,
          commentText,
          userName: user.name || "Anonymous",
          email: user.email,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setPosts((prev) =>
          prev.map((p) =>
            p._id === postId ? { ...p, comments: [...p.comments, data.data] } : p
          )
        );
        setMessage({ type: "success", text: "Comment added." });
      } else {
        setMessage({
          type: "error",
          text: data.message || "Failed to add comment.",
        });
      }
    } catch {
      setMessage({
        type: "error",
        text: "Failed to add comment. Try again later.",
      });
    }
  };

  // Create a new post.
  // We send the latitude and longitude as separate fields.
  const handleCreatePost = async (postContent) => {
    if (!postContent.trim()) {
      setMessage({ type: "error", text: "Post cannot be empty." });
      return;
    }
    if (postContent.length > 1000) {
      setMessage({ type: "error", text: "Post exceeds 1000 character limit." });
      return;
    }
    if (!coordinates) {
      setMessage({ type: "error", text: "Coordinates are required to create a post." });
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/create-post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: user.name || "Anonymous",
          email: user.email,
          postContent,
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setPosts((prev) => [
          {
            ...data.data,
            timeStamp: new Date(data.data.timeStamp).toLocaleString(),
          },
          ...prev,
        ]);
        setMessage({ type: "success", text: "Post submitted." });
      } else {
        setMessage({
          type: "error",
          text: data.message || "Failed to submit post.",
        });
      }
    } catch {
      setMessage({ type: "error", text: "Error submitting post. Try again." });
    } finally {
      setShowModal(false);
    }
  };

  // Prepare to delete a post.
  const handleDeletePost = (postId) => {
    setDeleteTarget({ type: "post", id: postId });
    setShowConfirmDeleteModal(true);
  };

  // Prepare to delete a comment.
  const handleDeleteComment = (postId, commentId) => {
    setDeleteTarget({ type: "comment", postId, commentId });
    setShowConfirmDeleteModal(true);
  };

  // Perform deletion once confirmed.
  const handleConfirmDelete = async () => {
    if (!deleteTarget) return;

    const { type, id, postId, commentId } = deleteTarget;

    try {
      let res;
      if (type === "post") {
        res = await fetch(`${process.env.REACT_APP_API_URL}/api/delete-post`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
      } else {
        res = await fetch(`${process.env.REACT_APP_API_URL}/api/delete-comment`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: commentId }),
        });
      }
      const data = await res.json();
      if (data.success) {
        setPosts((prev) =>
          type === "post"
            ? prev.filter((p) => p._id !== id)
            : prev.map((p) =>
                p._id === postId
                  ? { ...p, comments: p.comments.filter((c) => c._id !== commentId) }
                  : p
              )
        );
        setMessage({
          type: "success",
          text: `${type === "post" ? "Post" : "Comment"} deleted.`,
        });
      } else {
        setMessage({
          type: "error",
          text: data.message || `Failed to delete ${type}.`,
        });
      }
    } catch {
      setMessage({
        type: "error",
        text: `Error deleting ${deleteTarget.type}. Try again.`,
      });
    } finally {
      setShowConfirmDeleteModal(false);
      setDeleteTarget(null);
    }
  };

  // Cancel deletion.
  const handleCancelDelete = () => {
    setShowConfirmDeleteModal(false);
    setDeleteTarget(null);
  };

  // Filter posts by search query.
  const filteredPosts = posts.filter((post) => {
    const q = search.toLowerCase();
    return (
      post.postContent.toLowerCase().includes(q) ||
      post.userName.toLowerCase().includes(q) ||
      post.comments.some((c) => c.commentText.toLowerCase().includes(q))
    );
  });

  // Toggle the expansion of comments for a specific post.
  const toggleComments = (postId) => {
    setExpandedComments((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  // If geolocation fails, show an error alert.
  if (geoError) {
    return (
      <div className="container mt-4">
        <h1>Chat</h1>
        <div className="alert alert-danger text-center">{geoError}</div>
      </div>
    );
  }

  // If the user is not signed in, prompt to sign in.
  if (!user) {
    return (
      <div className="container mt-4">
        <h1>Chat</h1>
        <div className="alert alert-primary text-center">Please Sign In to View Chats</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex-1 pt-6">
        <div className="container">
          {/* Header section with welcome message */}
          <div className="d-flex flex-column align-items-center mb-4">
            <h1 className="fw-bold text-center display-6 mb-1">Welcome, {user.name}</h1>
            <p className="text-muted text-center">
              Use the search bar below to find posts or add your own using the + Post button.
            </p>
          </div>

          {/* Search container with inline radius filtering and Post button */}
          <div className="d-flex flex-wrap gap-2 align-items-center justify-content-center mb-4">
            <input
							id="radiusSelect"
              type="text"
              placeholder="Search posts, names, comments..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control"
              style={{ maxWidth: "300px" }}
            />
            <div className="d-flex align-items-center">
              <label htmlFor="radiusSelect" className="me-2 mb-0">
                Radius (miles):
              </label>
              <select
                id="radiusSelect"
                className="form-select"
                style={{ width: "100px" }}
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
              >
                <option value="0.5">0.5</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
              + Post
            </button>
          </div>

          {message.text && (
            <div
              className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"} mb-3`}
              role="alert"
            >
              {message.text}
            </div>
          )}

          {isLoading ? (
            <div className="d-flex justify-content-center my-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPosts.map((post) => {
                const isLiked = likedStatus[post._id];
                return (
                  <div key={post._id} className="indiv-chat p-4 space-y-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <h2 className="fw-semibold mb-0">{post.userName}</h2>
                      <div className="d-flex align-items-center">
                        <small className="chat-timestamp me-3 align-middle">{post.timeStamp}</small>
                        {post.email === user.email && (
                          <button className="btn-delete" onClick={() => handleDeletePost(post._id)}>
                            🗑️
                          </button>
                        )}
                      </div>
                    </div>

                    <p className="my-4">{post.postContent}</p>

                    <button
                      onClick={() => handleToggleLike(post._id)}
                      className={`btn-like ${isLiked ? "liked" : ""}`}
                    >
                      {post.likeCount || 0}
                    </button>

                    <CommentForm postId={post._id} onSubmit={handleComment} />

                    <div className="mt-3 space-y-3">
                      {(() => {
                        let commentsToDisplay = post.comments;
                        const hasMore = post.comments.length > 3;
                        if (!expandedComments.has(post._id) && hasMore) {
                          commentsToDisplay = post.comments.slice(0, 3);
                        }
                        return (
                          <>
                            {commentsToDisplay.map((c) => (
                              <div key={c._id} className="chat-comment comment-item relative mb-3">
                                <p>{c.commentText}</p>
                                <span className="chat-timestamp block">
                                  — {c.userName},{" "}
                                  {new Date(c.timeStamp).toLocaleString()}
                                </span>
                                {c.email === user.email && (
                                  <button
                                    className="btn-delete ml-2"
                                    onClick={() => handleDeleteComment(post._id, c._id)}
                                    title="Delete Comment"
                                  >
                                    🗑️
                                  </button>
                                )}
                              </div>
                            ))}
                            {hasMore && (
                              <button
                                className="btn btn-link p-0"
                                onClick={() => toggleComments(post._id)}
                              >
                                {expandedComments.has(post._id)
                                  ? "Show less comments"
                                  : "Show more comments"}
                              </button>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {showConfirmDeleteModal && (
        <ConfirmDeleteModal
          message="Are you sure you want to delete this?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}

      {showModal && (
        <CreatePostModal onClose={() => setShowModal(false)} onSubmit={handleCreatePost} />
      )}
    </div>
  );
}
