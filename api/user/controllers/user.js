const services = require("../services/user.js");

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
    const user = ctx.request.body;

    if (user === undefined) ctx.throw(400, "user is undefined");

    const response = await services.create(user);
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
