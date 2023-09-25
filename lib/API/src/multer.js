import express from 'express';
import multer from "multer";
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();
// Obtén la ruta del directorio actual utilizando import.meta.url y fileURLToPath
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//Middleware multer
//Objeto de Configuración
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  //request, file, callback
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
})
app.use(multer({
  //storage: storage,
  storage,
  dest: path.join(__dirname, 'public/uploads'),
  //Limite de número de bytes
  limits: {fileSize:1000000000},
  fileFilter: (req, file, cb) => {
    //Expresión regular para el fileType
    const fileType = /jpeg|jpg|png|gif/;
    const mimetype = fileType.test(file.mimetype);
    const extname = fileType.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Error: El archivo debe ser una imagen válida'));
  }
}).single('imagenempresa'));
export default app;