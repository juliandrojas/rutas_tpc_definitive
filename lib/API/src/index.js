import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import './database.js';
import indexRoutes from './routes/index.routes.js';
const app = express();
// Usamos las rutas
app.use('/', indexRoutes);
// Configuramos el middleware morgan para el registro de solicitudes
app.use(morgan('dev'));
// Configuramos cors
app.use(cors())
//Configuramos para servir archivos estáticos
app.use(express.static('images'));
//Configuramos puertos
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});