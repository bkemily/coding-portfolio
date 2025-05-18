const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommunityPost = new Schema({
  userName:    { type: String, required: false },
  email:       { type: String, required: false },
  timeStamp:   { type: Date,   default: Date.now },
  postContent: { type: String, required: false },
  likeCount:   { type: Number, default: 0 },
  usersLiked:  [{ type: String }],
  comments:    [{ type: mongoose.Schema.Types.ObjectId, ref: 'CommunityComment' }],
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], index: '2dsphere' }
  }
});

 // keep your 2dsphere index:
 CommunityPost.index({ location: '2dsphere' });

module.exports = mongoose.model('CommunityPost', CommunityPost);
