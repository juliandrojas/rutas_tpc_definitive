import multer from 'multer';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url'; // Importa la función fileURLToPath
import { v4 as uuidv4 } from 'uuid';
// Obtén la ruta del directorio actual utilizando import.meta.url y fileURLToPath
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public/uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  }
});

const upload = multer({
  dest: path.join(__dirname, 'public/uploads'),
  storage,
  limits: { fileSize: 1000000000 },
  fileFilter: (req, file, cb) => {
    const fileType = /jpeg|jpg|png|gif/;
    const mimetype = fileType.test(file.mimetype);
    const extname = fileType.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Error: El archivo debe ser una imagen válida'));
  }
}).single('imagenempresa');

export default upload;
