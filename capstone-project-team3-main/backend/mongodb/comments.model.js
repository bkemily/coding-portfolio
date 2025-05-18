const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommunityComment = new Schema({
    userName: { type: String, required: false },
    email: { type: String, required: false },
    commentText: { type: String, required: false },
    timeStamp: { type: Date, default: Date.now },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'CommunityPost' },
});

module.exports = mongoose.model('CommunityComment', CommunityComment);