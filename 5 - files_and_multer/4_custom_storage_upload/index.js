import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de almacenamiento personalizado con Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Ruta para subir un archivo único con almacenamiento personalizado
app.post("/upload", upload.single("file"), (req, res) => {
  if (req.file) {
    res.send(`Archivo subido con éxito: ${req.file.filename}`);
  } else {
    res.send("Error al subir el archivo.");
  }
});

// Prueba con cURL:
// 1. Inicia el servidor: node custom_storage_upload.js
// 2. Usa el siguiente comando cURL para subir un archivo:
//    curl -X POST http://localhost:3000/upload -F "file=@/ruta/a/tu/archivo.ext"
//    - Reemplaza '/ruta/a/tu/archivo.ext' con la ruta real al archivo que deseas subir.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
