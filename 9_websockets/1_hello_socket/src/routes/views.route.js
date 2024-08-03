import express from "express";
import path from "path";
import { __dirname } from "../utils.js";

const router = express.Router();

// Route for home page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

export default router;
