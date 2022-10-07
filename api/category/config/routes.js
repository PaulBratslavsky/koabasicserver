  
  const categoryRoutes =  [
    {
      route: "/categorys",
      controller: "category",
      type: "find",
      method: "get",
      policies: []
    },
    {
      route: "/categorys/:id",
      controller: "category",
      type: "findOne",
      method: "get",
      policies: []
    },
    {
      route: "/categorys",
      controller: "category",
      type: "create",
      method: "post",
      policies: []
    },
    {
      route: "/categorys/:id",
      controller: "category",
      type: "delete",
      method: "delete",
      policies: []
    },
    {
      route: "/categorys/:id",
      controller: "category",
      type: "update",
      method: "put",
      policies: []
    },
  ];

  module.exports = categoryRoutes;