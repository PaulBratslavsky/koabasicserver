

const { join } = require('path');
const fs = require('fs-extra');


module.exports = {
  async generateService(apiPath, apiName, liquidEngine) {
    const servicePath = join(apiPath, apiName, "services", `${apiName}.js`);

    try {
      // Compile the template
      const template = liquidEngine.renderFileSync('core-service', {
        id: apiName,
        table: apiName,
      });

      // Create the js file
      await fs.ensureFile(servicePath);

      // Create write stream for new js file
      const file = fs.createWriteStream(servicePath);

      // Export core controllers from liquid template file
      file.write(template);

      // Close the write stream
      file.end();
    } catch (error) {
      console.log(error);
    }
  }
}