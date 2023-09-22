import { Router } from 'express';
import { cargarDatosEmpresa, cargarInformacion } from '../controllers/empresas.controllers.js';
//Importamos los controladores
const router = Router();
router.get('/', cargarDatosEmpresa);
router.post('/cargarInfo', cargarInformacion);
export default router;