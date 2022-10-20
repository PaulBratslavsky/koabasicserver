require("dotenv").config();
const knex = require('./db/connection.js')
const fs = require('fs-extra');

const { Liquid } = require('liquidjs');
const { resolve } = require('path');

const liquidEngine = new Liquid({
  root: resolve(__dirname, 'templates'),
  extname: '.liquid'
})

const Koa = require("koa");
const Router = require("koa-router");

const bodyParser = require("koa-bodyparser");

const postRoutes = require("./api/post/config/routes.js");
const userRoutes = require("./api/user/config/routes.js");
const categoryRoutes = require("./api/category/config/routes.js");

const { generateController } = require("./factories/generate-controller");
const { generateService } = require("./factories/generate-service");
const { generateRoutes } = require("./factories/generate-routes.js")

async function readDirectoryFile(path = "") {
  const exists = await fs.exists(path);
  if (!exists) console.log("File does not exist");

  try {
    const output = await fs.readFile(path, "utf8");
    console.log(output)
    return output;
  } catch (err) {
    console.error(err)
  }
}



async function start() {
  // create the koa app
  const app = new Koa();
  const router = new Router();

  app.use(bodyParser());
  app.use(router.routes());

  // TODO: Create function to generate db based on schema 
  // TODO: Create function to generate config from 

  generateService("api", "user", liquidEngine);
  generateService("api", "post", liquidEngine);
  generateService("api", "category", liquidEngine);

  generateController("api", "user", liquidEngine);
  generateController("api", "post", liquidEngine);
  generateController("api", "category", liquidEngine);

  // generate routes from config > routes.js file
  generateRoutes(postRoutes, router, knex);
  generateRoutes(userRoutes, router, knex);
  generateRoutes(categoryRoutes, router, knex);

  readDirectoryFile('api/user/controllers/user.js')

  // start the server
  const PORT = 4000;
  app.listen(PORT);
  console.log(`Server is listening on port ${PORT}`);
}

start()
