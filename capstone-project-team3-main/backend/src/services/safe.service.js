const SafeDAO = require('../daos/safe.dao');

// Get safe posts by last name and either phone number or home address, city, state
const getSafePosts = async (lastName, phoneNumber, homeAddress, homeCity, homeState) => {
    return await SafeDAO.getSafePosts(lastName, phoneNumber, homeAddress, homeCity, homeState);
}

// Create a new safe post
const createSafePost = async (safePost) => {
    return await SafeDAO.createSafePost(safePost);
}

// Update a safe post by ID
const updateSafePost = async (safePost) => {
    return await SafeDAO.updateSafePost(safePost.id, safePost);
}

// Delete a safe post by ID
const deleteSafePost = async (safePost) => {
    return await SafeDAO.deleteSafePost(safePost.id);
}

module.exports = {
    getSafePosts,
    createSafePost,
    updateSafePost,
    deleteSafePost
};