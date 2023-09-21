import { Router } from 'express';
import { homeGrid } from '../controllers/index.controllers.js';
//Importamos los controladores
const router = Router();
router.get('/', homeGrid);
export default router;