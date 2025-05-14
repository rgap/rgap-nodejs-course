import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Serve Swagger UI at /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use user routes
app.use("/api/v1/users", userRoutes);

export default app;
