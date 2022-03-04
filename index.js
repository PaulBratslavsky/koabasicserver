require("dotenv").config();

const Koa = require("koa");
const Router = require("koa-router");
const mongoose = require("mongoose");
const bodyParser = require("koa-bodyparser");
const postRoutes = require("./api/post/config/routes.js");

const url = process.env.MONGO_DB_URI;

async function start(url) {

  // database setup
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
    return;
  }

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

start(url);

// mongoose.connect(connectionString)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB', err));
// mongoose.connection.on('error', console.error);

// router.get("/posts", (ctx) => post.find(ctx));
// router.get("/posts/:id", (ctx) => post.findOne(ctx));
// router.post("/posts", (ctx) => post.create(ctx));
// router.delete("/posts/:id", (ctx) => post.delete(ctx));
// router.put("/posts/:id", (ctx) => post.update(ctx));

// router.get("/comments", (ctx) => {
//   ctx.body = comments;
// });

// router.get("/comments/:id", (ctx) => {
//   const { id } = ctx.params;
//   const comment = comments.find((comment) => comment.id === id);
//   ctx.body = comment;
// });

// router.get("/users", (ctx) => {
//   ctx.body = users;
// });

// router.get("/users/:id", (ctx) => {
//   const { id } = ctx.params;
//   const user = users.find((comment) => comment.id === id);
//   ctx.body = user;
// });
