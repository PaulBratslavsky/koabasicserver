
module.exports = {
  find: async function (knex) {
    const Query = knex('users');
    return await Query.select('*');
  },

  findOne: async function (knex, id) {
    const Query = knex('users');
    return await Query.select('*').where({ id });
  },
}
