import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import multer from 'multer';
import path from 'path';
import './db/database.js';
import apiRoutes from './routes/api.routes.js';
import empresaRoutes from "./routes/empresa.routes.js";
import indexRoutes from './routes/index.routes.js';
const app = express();
//Middleware Multer
app.use(multer())
// Usamos las rutas
app.use('/', indexRoutes);
app.use('/api/', apiRoutes);
app.use('/empresa/', empresaRoutes);
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