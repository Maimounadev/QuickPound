const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    comment: {
      type: String,
      required: true,
    },
    
    postId: {
      type: String,
      ref: 'Post',
    },
    
    user: {
      type: String,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  module.exports = mongoose.model("comments", commentSchema);
  