// TODO: Create function to get controller.
const { join } = require('path');
const fs = require('fs-extra');

async function getController(route) {
  const controllerPath = join("api", route.controller, "controllers", `${route.controller}.js`);
  try {
    await fs.ensureFile(controllerPath);
    const controllers = await import(`../api/${route.controller}/controllers/${route.controller}.js`);
    return controllers.default[route.type];

  } catch (err) {

  } finally {
    console.log(controllerPath)
  }
}

module.exports = {
  generateRoutes(routes, router, knex) {
    routes.forEach(async (route) => {
      const controller = await getController(route)
      return router[route.method](route.route, function (ctx) {
        return controller(ctx, knex);
      });
    });
  }
}
