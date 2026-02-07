
import { Router } from "express";
import { verificarCredenciales } from "./../src/controllers/userController";

const router = Router();

routes.get("/usuarios", verificarCredenciales);

export default routes;