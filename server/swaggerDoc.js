const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerSpec = YAML.load("./PippasSong-API_Example-1.0.0-resolved.yaml");

module.exports = {
  swaggerUi,
  swaggerSpec,
};
