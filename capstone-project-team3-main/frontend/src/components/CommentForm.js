import React, { useState } from "react";
import "../css/Chat.css";

export default function CommentForm({ postId, onSubmit }) {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = () => {
    if (commentText.trim()) {
      onSubmit(postId, commentText.trim());
      setCommentText("");
    }
  };

  const handleCancel = () => {
    setCommentText("");
  };

  return (
    <div>
      <label htmlFor={`commentTextarea-${postId}`} className="sr-only">
        Add a comment
      </label>
      <textarea
        id={`commentTextarea-${postId}`}
        className="chat-comment-textarea"
        value={commentText}
        placeholder="Add a comment..."
        onChange={(e) =>
          setCommentText(e.target.value.slice(0, 500))
        }
      />
      <div className="flex justify-between items-center mt-1">
        <span className="char-counter">{commentText.length} / 500</span>
        <div className="space-x-2">
          <button className="chat-comment-button" onClick={handleSubmit}>
            Submit
          </button>
          <button className="chat-comment-cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
