// Routes: Defines the API endpoints and maps them to the controller functions
import { Router } from "express";
import { getAllUsers } from "../controllers/userController.js";

const router = Router();

router.get("/users", getAllUsers);

export default router;
