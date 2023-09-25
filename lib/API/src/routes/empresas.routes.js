import { Router } from 'express';
import { cargarDatosEmpresa, cargarInformacion, mostrarDatosEmpresa } from '../controllers/empresas.controllers.js';
//Importamos los controladores
const router = Router();
router.get('/', cargarDatosEmpresa);
router.post('/cargarInfo', cargarInformacion);
router.get('/mostrarDatos', mostrarDatosEmpresa);
export default router;