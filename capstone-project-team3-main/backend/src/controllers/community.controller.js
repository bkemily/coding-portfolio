// Initialize express router
const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth.middleware');
const CommunityService = require('../services/community.service');

// Middleware to check authentication
//router.use(authMiddleware);

// Get all posts
router.get('/api/get-posts', async (req, res) => {
    try {

        const latitude = req.query.latitude;
        const longitude = req.query.longitude;
        const radius = req.query.radius || 100 // Default radius in miles

        // Get all community posts and their comments
        const posts = await CommunityService.getAllCommunityPostsAndComments(latitude, longitude, radius);

        return res.status(200).json({
            success: true,
            message: 'Community Posts retrieved successfully',
            data: posts
        });
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to retrieve community posts at this time, please try again later',
            error: error.message
        });
    }
});

// Create a post
router.post('/api/create-post', async (req, res) => {
    try {

        // Validate the request, ensuring that the userName and postContent are provided
        const post = req.body;
        if (!post || !post.userName || !post.postContent || !post.email || post.latitude == null || post.longitude == null) {
            return res.status(400).send('Missing required fields');
        }

        // Create the new post
        const newPost = await CommunityService.createNewCommunityPost(post);

        return res.status(200).json({
            success: true,
            message: 'Community post created successfully',
            data: newPost
        });
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to create community post at this time, please try again later',
            error: error.message
        });
    }
});

// Toggle a like on a post
router.post('/api/toggle-like', async (req, res) => {
    try {

        // Validate the request, ensuring that the postId and emailAddress are provided
        const post = req.body;
        if (!post || !post.postId || !post.email) {
            return res.status(400).send('Missing required fields');
        }

        // Toggle like on the post
        const updatedPost = await CommunityService.toggleLikeOnCommunityPost(post.postId, post.email);

        return res.status(200).json({
            success: true,
            message: 'Community post like toggled successfully',
            data: updatedPost
        });
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to toggle like on community post at this time, please try again later',
            error: error.message
        });
    }
});

// Delete a post
router.delete('/api/delete-post', async (req, res) => {
    try {

        // Validate the request, ensuring that the ID is provided
        const communityPost = req.body;
        if(!communityPost || !communityPost.id) {
            return res.status(400).send('Missing required fields');
        }

        // Delete the post
        let post = await CommunityService.deleteCommunityPostById(communityPost);

        // If the post is not found, return a 404 error
        if(!post) {
            return res.status(404).json({
                success: false,
                message: 'Community Post Not Found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Community post deleted successfully',
            data: post
        });
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to delete community post at this time, please try again later',
            error: error.message
        });
    }
});

// Create a comment
router.post('/api/create-comment', async (req, res) => {
    try {

        // Validate the request, ensuring that the userName, commentText, and postId are provided
        const comment = req.body;
        if (!comment || !comment.userName || !comment.email || !comment.commentText || !comment.postId) {
            return res.status(400).send('Missing required fields');
        }

        // Create the new comment and link it to the post
        const newComment = await CommunityService.createNewCommunityComment(comment);

        return res.status(200).json({
            success: true,
            message: 'Community comment created successfully',
            data: newComment
        });
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to create community comment at this time, please try again later',
            error: error.message
        });
    }
});

// Delete a comment
router.delete('/api/delete-comment', async (req, res) => {
    try {
        
        // Validate the request, ensuring that the ID is provided
        const communityComment = req.body;
        if(!communityComment || !communityComment.id) {
            return res.status(400).send('Missing required fields');
        }
        
        // Delete the comment
        let comment = await CommunityService.deleteCommunityCommentById(communityComment);

        // If the post is not found, return a 404 error
        if(!comment) {
            return res.status(404).json({
                success: false,
                message: 'Community Post Not Found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Community comment deleted successfully',
            data: comment
        });
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to delete community comment at this time, please try again later',
            data: error.message
        });
    }
});

module.exports = router;