// Entry Point: Starts the Express server on the specified port
import app from "./src/server.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
