const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const post = require("./api/post/controllers/post.js");


const app = new Koa();
const router = new Router();
const PORT = 4000;

app.use(bodyParser());

app.use(async (ctx, next) => {
  console.log(
    `${ctx.method} ${ctx.url} ${ctx.status} ${new Date().toLocaleString()}`
  );
  await next();
});

app.use(router.routes());

router.get("/", (ctx) => ctx.body = "Hello World");

router.get("/posts", (ctx) => post.find(ctx));
router.get("/posts/:id", (ctx) => post.findOne(ctx));
router.post("/posts", (ctx) => post.create(ctx));
router.delete("/posts/:id", (ctx) => post.delete(ctx));
router.put("/posts/:id", (ctx) => post.update(ctx));

router.get("/comments", (ctx) => {
  ctx.body = comments;
});

router.get("/comments/:id", (ctx) => {
  const { id } = ctx.params;
  const comment = comments.find((comment) => comment.id === id);
  ctx.body = comment;
});

router.get("/users", (ctx) => {
  ctx.body = users;
});

router.get("/users/:id", (ctx) => {
  const { id } = ctx.params;
  const user = users.find((comment) => comment.id === id);
  ctx.body = user;
});

app.listen(PORT);

console.log(`Server is listening on port ${PORT}`);
