

const { join } = require('path');
const fs = require('fs-extra');


module.exports = {
  async generateController(apiPath, apiName, liquidEngine) {
    const controllerPath = join(apiPath, apiName, "controllers", `${apiName}.js`);

    try {
      // Compile the template
      const template = liquidEngine.renderFileSync('core-controller', {
        id: apiName,
        uid: `api::${apiName}.${apiName}`,
      });

      // Create the js file
      await fs.ensureFile(controllerPath);

      // Create write stream for new js file
      const file = fs.createWriteStream(controllerPath);

      // Export core controllers from liquid template file
      file.write(template);

      // Close the write stream
      file.end();
    } catch (error) {
      console.log(error);
    }
  }
}