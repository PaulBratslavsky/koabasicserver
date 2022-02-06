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
]

module.exports = {
  find: function () {
    return posts;
  },

  findOne: function (id) {
    return posts.find(post => post.id === id);
  },

  create: function (post) {
    return posts.push(post);
  },

  delete: function (id) {
    posts = [...posts.filter(post => post.id !== id)];
    return posts;
  },

  update: function (id, post) {
    console.log(id, post);
    posts = [...posts.map(item => item.id === id ? { ...item, ...post } : item)];
    return posts;
  }
};
