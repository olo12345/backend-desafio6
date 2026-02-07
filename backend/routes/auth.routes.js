import { Router } from "express";
import { verificarCredenciales } from "./../src/controllers/userController.js";
import checkToken from "../src/utils/checkToken.js";

const routes = new Router();

// Middleware para verificar validez de token
routes.use("/usuarios", checkToken);

routes.get("/usuarios", verificarCredenciales);

export default routes;