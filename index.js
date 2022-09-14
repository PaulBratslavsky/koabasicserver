require("dotenv").config();

const Koa = require("koa");
const Router = require("koa-router");

const bodyParser = require("koa-bodyparser");
const postRoutes = require("./api/post/config/routes.js");

async function start() {
  // create the koa app
  const app = new Koa();
  const router = new Router();

  app.use(bodyParser());
  app.use(router.routes());

  // set up routes
  postRoutes.forEach((route) => {
    return router[route.method](route.route, async (ctx) =>
      route.controller[route.type](ctx)
    );
  });

  // start the server
  const PORT = 4000;
  app.listen(PORT);
  console.log(`Server is listening on port ${PORT}`);
}

start();
