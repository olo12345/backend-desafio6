import { Router } from "express";
import { createUser, loginUser,  } from "./../src/controllers/userController.js";

const routes = Router();

routes.post("/usuarios", createUser);

routes.post("/login", loginUser);

routes.get("/{*splat}", (_, res) =>
    res.status(404).send("La ruta no existe")
);

export default routes;