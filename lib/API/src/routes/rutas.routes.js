import { Router } from 'express';
import { home } from '../controllers/rutas.controllers.js';
//Importamos los controladores
const router = Router();
router.get('/', home);
export default router;