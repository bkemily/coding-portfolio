require('mongoose');
const CommunityPost = require('../../mongodb/posts.model');
const CommunityComment = require('../../mongodb/comments.model');

const getAllCommunityPostsAndComments = async (latitude, longitude, radius) => {
    const query = {};

    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);
    const rad = parseFloat(radius);

    const validCoords = !isNaN(lat) && !isNaN(lng);

    if (validCoords) {
        // Convert radius from miles to meters (default to 10 miles if not provided)
        const maxDistance = (!isNaN(rad) ? rad : 10) * 1609.34;

        // Add geospatial query
        query.location = {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [lng, lat] // longitude first!
                },
                $maxDistance: maxDistance
            }
        };
    }

    return await CommunityPost
        .find(query)
        .populate('comments')
        .sort({ timeStamp: -1 });
};

// Get a community post by ID
const getCommunityPostById = async (postId) => {
    return await CommunityPost.findById(postId)
    .populate('comments')
    .sort({ timeStamp: -1 });
}

const createNewCommunityPost = async (post) => {
    // build your document
    const doc = {
        userName:    post.userName,
        email:       post.email,
        postContent: post.postContent,
        // likeCount, comments, timeStamp all use their schema defaults
    };

    if (post.latitude != null && post.longitude != null) {
        doc.location = {
          type: 'Point',
          coordinates: [
            parseFloat(post.longitude),
            parseFloat(post.latitude)
          ]
        };
    }          

    return await CommunityPost.create(doc);
};

// Update the like count of a community post
const updatedPostLikeCount = async (postId, likeCount, usersLiked) => {
    return await CommunityPost.findByIdAndUpdate(
        postId,
        { 
            likeCount: likeCount,
            usersLiked: usersLiked
        },
        { new: true }
    );
}

// Delete a community post by ID
const deleteCommunityPostById = async (postId) => {
    // Delete the post
    const deletedPost = await CommunityPost.findByIdAndDelete(postId);

    if (deletedPost) {
        // Delete all comments linked to this post
        await CommunityComment.deleteMany({ post: postId });
    }

    return deletedPost;
}

// Create a new community comment and add it to a post
const createNewCommunityComment = async (comment) => {
    // Create the new comment
    const newComment = await CommunityComment.create({
        userName: comment.userName,
        email: comment.email,
        commentText: comment.commentText,
        post: comment.postId // link the post ID
    });

    // Push the new comment’s _id into the post's comments array
    await CommunityPost.findByIdAndUpdate(
        comment.postId,
        { $push: { comments: newComment._id } },
        { new: true }
    );

    return newComment;
}

// Delete a community comment by ID and remove it from the post's comments array
const deleteCommunityCommentById = async (commentId) => {
    // Find the comment to get the associated post ID
    const comment = await CommunityComment.findById(commentId);

    if (!comment) return null;

    // Remove the comment ID from the post's comments array
    await CommunityPost.findByIdAndUpdate(
        comment.post,
        { $pull: { comments: commentId } }
    );

    // Delete the comment itself
    return await CommunityComment.findByIdAndDelete(commentId);
}

module.exports = {
    getAllCommunityPostsAndComments,
    createNewCommunityPost,
    createNewCommunityComment,
    deleteCommunityPostById,
    deleteCommunityCommentById,
    updatedPostLikeCount,
    getCommunityPostById
};