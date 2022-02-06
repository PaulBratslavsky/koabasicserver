const post = require("../controllers/post.js");
  
  const postRoutes =  [
    {
      route: "/posts",
      controller: post,
      type: "find",
      method: "get",
      policies: []
    },
    {
      route: "/posts/:id",
      controller: post,
      type: "findOne",
      method: "get",
      policies: []
    },
    {
      route: "/posts",
      controller: post,
      type: "create",
      method: "post",
      policies: []
    },
    {
      route: "/posts/:id",
      controller: post,
      type: "delete",
      method: "delete",
      policies: []
    },
    {
      route: "/posts/:id",
      controller: post,
      type: "update",
      method: "put",
      policies: []
    },
  ];

  module.exports = postRoutes;