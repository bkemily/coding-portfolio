require('mongoose');
const SafePost = require('../../mongodb/safe.model');

// Return posts from the database by Last Name and (Phone Number or (home address, city, and state) ignoring case
const getSafePosts = async (lastName, phoneNumber, homeAddress, homeCity, homeState) => {
    try {
        let query = {
            lastName: { $regex: new RegExp(lastName, 'i') }
        };

        if (phoneNumber) {
            query.phoneNumber = { $regex: new RegExp(phoneNumber, 'i') };
        }
        else if (homeAddress && homeCity && homeState) {
            query.homeAddress = { $regex: new RegExp(homeAddress, 'i') };
            query.homeCity = { $regex: new RegExp(homeCity, 'i') };
            query.homeState = { $regex: new RegExp(homeState, 'i') };
        }

        return await SafePost.find(query);
    }
    catch (error) {
        throw new Error(error);
    }
}

// Create a new safe post
const createSafePost = async (safePost) => {
    try {
        return await SafePost.create(safePost);
    }
    catch (error) {
        throw new Error(error);
    }
}

// Update a safe post by ID
const updateSafePost = async (id, safePost) => {
    try {
        return await SafePost.findByIdAndUpdate(id, safePost, { new: true });
    }
    catch (error) {
        throw new Error(error);
    }
}

// Delete a safe post by ID
const deleteSafePost = async (id) => {
    try {
        return await SafePost.findByIdAndDelete(id);
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    getSafePosts,
    createSafePost,
    updateSafePost,
    deleteSafePost
};
