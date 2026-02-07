import { Router } from "express";
import { verificarCredenciales } from "./../src/controllers/userController.js";

const routes = Router();

routes.get("/usuarios", verificarCredenciales);

export default routes;