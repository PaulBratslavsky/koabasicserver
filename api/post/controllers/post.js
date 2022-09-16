const services = require("../services/post.js");

module.exports = {
  find: async function (ctx, knex) {
    const response = await services.find(knex);
    ctx.body = response;
  },

  findOne: async function (ctx, knex) {
    console.log(ctx.params, "from findone");
    const { id } = ctx.params;
    if (!id) ctx.throw(400, "Please provide an id");
    const response = await services.findOne(knex, id);
    ctx.body = response;
  },

  create: async function (ctx, knex) {
    const post = ctx.request.body;

    if (post === undefined) ctx.throw(400, "Post is undefined");
    if (!post.userId) ctx.throw(400, "Invalid post: missing userId");
    if (!post.title) ctx.throw(400, "Invalid post: missing title");
    if (!post.content) ctx.throw(400, "Invalid post: missing content");

    const response = await services.create(post);
    ctx.body = response;
  },

  delete: async function (ctx) {
    const { id } = ctx.params;
    if (!id) ctx.throw(400, "Please provide an id");
    const response = await services.delete(id);
    ctx.body = response;
  },

  update: async function (ctx) {
    const { id } = ctx.params;
    if (!id) ctx.throw(400, "Please provide an id");
    const response = await services.update(id, ctx.request.body);
    ctx.body = response;
  },
};
