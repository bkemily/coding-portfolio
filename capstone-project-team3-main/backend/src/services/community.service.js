const communityDao = require('../daos/community.dao');

// Get all community posts and their comments
const getAllCommunityPostsAndComments = async (latitude, longitude, radius) => {
    return await communityDao.getAllCommunityPostsAndComments(latitude, longitude, radius);
}

// Create a new community post
const createNewCommunityPost = async (post) => {
    return await communityDao.createNewCommunityPost(post);
}

// Toggle like on a community post
const toggleLikeOnCommunityPost = async (postId, emailAddress) => {
    
    // Check if the postId and emailAddress are provided
    const post = await communityDao.getCommunityPostById(postId);
    
    // Check if the post exists
    if (!post) {
        throw new Error('Post not found');
    }

    // Grab the current like count and users who liked the post
    let likeCount = post.likeCount;
    let usersLiked = post.usersLiked;

    if (usersLiked.includes(emailAddress)) {
        // User has already liked the post, so remove the like
        likeCount--;
        usersLiked = usersLiked.filter(user => user !== emailAddress);
    } else {
        // User has not liked the post, so add the like
        likeCount++;
        usersLiked.push(emailAddress);
    }

    return await communityDao.updatedPostLikeCount(postId, likeCount, usersLiked);
}

// Delete a community post by ID
const deleteCommunityPostById = async (post) => {
    return await communityDao.deleteCommunityPostById(post.id);
}

// Create a new community comment and add it to a post
const createNewCommunityComment = async (comment) => {
    return await communityDao.createNewCommunityComment(comment);
}

// Delete a community comment by ID
const deleteCommunityCommentById = async (comment) => {
    return await communityDao.deleteCommunityCommentById(comment.id);
}

module.exports = {
    getAllCommunityPostsAndComments,
    createNewCommunityPost,
    createNewCommunityComment,
    deleteCommunityPostById,
    deleteCommunityCommentById,
    toggleLikeOnCommunityPost
};