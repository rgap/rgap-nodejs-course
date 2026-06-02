import express from "express";
import swaggerUi from "swagger-ui-express";
import authMiddleware from "./middlewares/authMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import swaggerDocument from "./swagger.json" assert { type: "json" };

const app = express();

// Serve Swagger UI at /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Create a router for API routes
const apiRouter = express.Router();

// Apply auth middleware to all API routes
apiRouter.use(authMiddleware);

// Use user routes
apiRouter.use("/users", userRoutes);

// Mount the API router
app.use("/api/v1", apiRouter);

export default app;
