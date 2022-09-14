exports.seed = (knex, Promise) => {
  return knex('posts').del()
  .then(() => {
    return knex('posts').insert({
      name: 'The Land Before Time',
      content: 'Fantasy',
      rating: 7,
      published: false
    });
  })
  .then(() => {
    return knex('posts').insert({
      name: 'Jurassic Park',
      content: 'Science Fiction',
      rating: 9,
      published: true
    });
  })
  .then(() => {
    return knex('posts').insert({
      name: 'Ice Age: Dawn of the Dinosaurs',
      content: 'Action/Romance',
      rating: 5,
      published: false
    });
  });
};