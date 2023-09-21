import { Router } from 'express';
import { homeGrid, indexHTML, uploadImage } from '../controllers/index.controllers.js';
//Importamos los controladores
const router = Router();
router.get('/data', homeGrid);
router.get('/images', indexHTML);
router.post('/upload', uploadImage);
export default router;