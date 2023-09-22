import { Router } from 'express';
import { obtenerListaEmpresas } from '../controllers/api.controllers.js';
//Importamos los controladores
const router = Router();
router.get('/empresas', obtenerListaEmpresas);
/*router.post('/cargarDatos', cargarDatos);
router.get('/data', queryEmpresasAPI);
router.get('/uploadinfo', indexHTML);
router.post('/upload', uploadImage);*/
export default router;