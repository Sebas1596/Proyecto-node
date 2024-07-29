import express from 'express';
import { formularioLogin,autenticar,formularioRegistro,registrar,formularioOlvidePassword, confirmar,resetPassword,comprobarToken,nuevoPassword, Sesion } from '../controllers/usuarioController.js';

const router = express.Router();

//Inicio de Sesión
router.get('/login',formularioLogin);
router.post('/login', autenticar);

// cerrar sesión
router.post("/cerrar-sesion", Sesion);

//formulario de Registro
router.get('/registro',formularioRegistro); 
router.post('/registro',registrar);

// se confirma la cuenta
router.get('/confirmar/:token',confirmar);

// se recupera la cuenta
router.get('/olvide-password',formularioOlvidePassword);
router.post('/olvide-password', resetPassword);

// se almacena otra contraseña
router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token',nuevoPassword);

export default router;