const postRoutes = [
  {
    route: "/users",
    controller: "user",
    type: "find",
    method: "get",
    policies: []
  },
  {
    route: "/users/:id",
    controller: "user",
    type: "findOne",
    method: "get",
    policies: []
  },
  {
    route: "/users",
    controller: "user",
    type: "create",
    method: "post",
    policies: []
  },
  {
    route: "/users/:id",
    controller: "user",
    type: "delete",
    method: "delete",
    policies: []
  },
  {
    route: "/users/:id",
    controller: "user",
    type: "update",
    method: "put",
    policies: []
  },
];

module.exports = postRoutes;