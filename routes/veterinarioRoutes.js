import express from "express";
const router = express.Router();
import {
  perfil,
  resgistrar,
  confirmar,
  autenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  actualizarPerfil,
  actualizarPassword,
} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";
import { ROUTES_NAMES } from "./index.js";

// Area publica

router.post(ROUTES_NAMES.PATH, resgistrar);
router.get(ROUTES_NAMES.CONFIRM_ROUTE, confirmar);
router.post(ROUTES_NAMES.AUTENTICAR_ROUTE, autenticar);
router.post(ROUTES_NAMES.OLVIDE_PASSWORD_ROUTE, olvidePassword);
router.get(ROUTES_NAMES.COMPROBAR_TOKEN_ROUTE, comprobarToken);
router.post(ROUTES_NAMES.NUEVO_PASSWORD_ROUTE, nuevoPassword);

// Area privada

router.get("/perfil", checkAuth, perfil);
router.put("/perfil/:id", checkAuth, actualizarPerfil);
router.put("/actualizar-password", checkAuth, actualizarPassword);

export default router;
