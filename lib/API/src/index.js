import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import multer from 'multer';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url'; // Importa la función fileURLToPath
import { v4 as uuidv4 } from 'uuid';
import './database.js';
import indexRoutes from './routes/index.routes.js';
// Obtén la ruta del directorio actual utilizando import.meta.url y fileURLToPath
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//Como almacenamos las imagenes
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    //Request, file, callback
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});
const app = express();
//Middleware Multer
app.use(multer({
    //Donde vamos a poner las imagenes
    dest: path.join(__dirname, 'public/uploads'),
    //Storage que creamos
    storage,
    //Limite de 1 (MB) (Se da en número de bytes)
    limits: {fileSize: 1000000000},
    //Recibir exactamente un tipo de archivo
    //Request, file, callback
    fileFilter: (req, file, cb) => {
        //Usamos una expresión regular
        const fileType = /jpeg|jpg|png|gif/;
        //Extraemos la extensión del archivo que subimos
        const mimetype = fileType.test(file.mimetype);
        //Extraemos el nombre del archivo que subimos
        const extname = fileType.test(file.originalname);
        if(mimetype && extname) {
            //Continuamos con el flujo de la app
            return cb(null, true);
        }
        cb("Error: El archivo debe ser una imagen válida");
    }
}).single('image'));
// Usamos las rutas
app.use('/', indexRoutes);
// Configuramos el middleware morgan para el registro de solicitudes
app.use(morgan('dev'));
// Configuramos cors
app.use(cors())
//Configuramos las imagenes
app.use(express.static(path.join(__dirname, 'public'))); // Configura la carpeta 'public' como estática
// Configuramos ejs
app.set('view engine', 'ejs');
//Configuramos las vistas
app.set('views', path.join(__dirname, 'views'));
//Configuramos puertos
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});