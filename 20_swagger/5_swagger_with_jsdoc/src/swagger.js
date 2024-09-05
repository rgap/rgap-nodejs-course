import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User API",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.js"], // files containing annotations as above
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
