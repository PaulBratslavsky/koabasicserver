const services = require("../services/category.js");

// TODO: Eventualy use facotry functino to generate the controllers.


module.exports = {
  find: async function (ctx, knex) {
    const response = await services.find(knex);
    ctx.body = response;
  },

  findOne: async function (ctx, knex) {
    const { id } = ctx.params;
    if (!id) ctx.throw(400, "Please provide an id");
    const response = await services.findOne(knex, id);
    ctx.body = response;
  },

  create: async function (ctx, knex) {
    const category = ctx.request.body;

    if (category === undefined) ctx.throw(400, "category is undefined");

    const response = await services.create(category);
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
