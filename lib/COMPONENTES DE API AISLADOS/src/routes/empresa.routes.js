import { Router } from 'express';
import { cargarDatos, cargarFoto, registrarEmpresa } from '../controllers/empresa.controllers.js';
import { indexHTML, queryEmpresasAPI, uploadImage } from '../controllers/index.controllers.js';
import { obtenerListaEmpresas } from '../controllers/api.controllers.js';
//Importamos los controladores
const router = Router();
router.get('/obtenerListaEmpresas', obtenerListaEmpresas);
router.get('/cargarInfo', registrarEmpresa);
router.post('/cargarFoto', cargarFoto);
router.post('/cargarDatos', cargarDatos);
router.get('/data', queryEmpresasAPI);
router.get('/uploadinfo', indexHTML);
router.post('/upload', uploadImage);
export default router;