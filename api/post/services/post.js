// const mongoose = require("mongoose");
const knex = require('../../../db/connection.js');
const Post = knex('posts');

module.exports = {
  find: async function () {
    return await Post.select('*');
  },

  findOne: async function (id) {
    return await Post.select('*').where({ id });
  },

  // create: async function (post) {
  //   return await Post.create(post);
  // },

  // delete: async function (id) {
  //   return await Post.deleteOne(mongoose.Types.ObjectId(id));
  // },

  // update: async function (id, post) {
  //   return await Post.findByIdAndUpdate(mongoose.Types.ObjectId(id), post);
  // },
};
