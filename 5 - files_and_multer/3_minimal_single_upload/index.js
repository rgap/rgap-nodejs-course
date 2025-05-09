import express from "express";
import multer from "multer";

const app = express();
const upload = multer({ dest: "uploads/" }); // Files will be stored in the 'uploads' directory

// Single file upload route
app.post("/upload", upload.single("file"), (req, res) => {
  if (req.file) {
    res.send(`File uploaded successfully: ${req.file.filename}`);
  } else {
    res.send("File upload failed.");
  }
});

// Prueba con cURL:
// 1. Inicia el servidor: node minimal_single_upload.js
// 2. Usa el siguiente comando cURL para subir un archivo:
//    curl -X POST http://localhost:3000/upload -F "file=@/ruta/a/tu/archivo.ext"
//    - Reemplaza '/ruta/a/tu/archivo.ext' con la ruta real al archivo que deseas subir.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
