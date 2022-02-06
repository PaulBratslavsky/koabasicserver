const services = require("../services/post.js");
const uniqueId = require("uuid").v4;

module.exports = {
  find: function (ctx) {
    const posts = services.find();
    ctx.body = posts;
  },

  findOne: function (ctx) {
    const { id } = ctx.params;
    const post = services.findOne(id);
    ctx.body = post;
  },

  create: function (ctx) {
    const post = ctx.request.body;
    post.id = uniqueId();

    if (post === undefined) ctx.throw(400, "Post is undefined");
    if (!post.userId) ctx.throw(400, "Invalid post: missing userId");
    if (!post.title) ctx.throw(400, "Invalid post: missing title");
    if (!post.content) ctx.throw(400, "Invalid post: missing content");

    services.create(post);
    ctx.body = post;
  },

  delete: function (ctx) {
    const { id } = ctx.params;
    const post = services.delete(id);
    ctx.body = post;
  },

  update: function (ctx) {
    const { id } = ctx.params;
    const post = services.update(id, ctx.request.body);
    ctx.body = post;
  }
};
