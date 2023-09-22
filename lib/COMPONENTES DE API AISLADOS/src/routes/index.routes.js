import { Router } from 'express';
import { home } from '../controllers/index.controllers.js';
//Importamos los controladores
const router = Router();
router.get('/', home);

//router.get('/registrarEmpresa', registrarEmpresa);
/*router.get('/data', queryEmpresasAPI);
router.get('/uploadInfo', indexHTML);
router.post('/upload', uploadImage);*/
export default router;