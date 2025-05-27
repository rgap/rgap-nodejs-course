import app from "./src/app.js";

const PORT = process.env.PORT || 3000;

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger UI is available on http://localhost:${PORT}/api-docs`);
});
