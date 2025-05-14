import express from "express";
import swaggerUi from "swagger-ui-express";
import userRoutes from "./routes/userRoutes.js";
import swaggerDocument from "./swagger.json" assert { type: "json" };

const app = express();

// Serve Swagger UI at /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Use user routes
app.use("/api/v1/users", userRoutes);

export default app;
