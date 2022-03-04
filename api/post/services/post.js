const mongoose = require("mongoose");
const Post = require("../models/post.js");

let posts = [
  {
    id: "1",
    title: "Hello World",
    content: "Welcome to my blog!",
    userId: "1",
  },
  {
    id: "2",
    title: "About Me",
    content: "I am a software engineer.",
    userId: "1",
  },
  {
    id: "3",
    title: "Contact Me",
    content: "Please contact me at my email.",
    userId: "1",
  },
];

module.exports = {
  find: async function () {
    return await Post.find();
  },

  findOne: async function (id) {
    return await Post.findById(mongoose.Types.ObjectId(id));
  },

  create: async function (post) {
    return await Post.create(post);
  },

  delete: async function (id) {
    return await Post.deleteOne(mongoose.Types.ObjectId(id));
  },

  update: async function (id, post) {
    return await Post.findByIdAndUpdate(mongoose.Types.ObjectId(id), post);
  },
};
