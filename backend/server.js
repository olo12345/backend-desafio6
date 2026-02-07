import express from "express";
import "dotenv/config";
import cors from "cors";
import UserRouter from "./routes/user.routes.js";
import AuthRouter from "./routes/auth.routes.js";
import logger from "./src/utils/logger.js";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Middleware para loggear tipo de consultas y rutas
app.use(logger);

app.use("", AuthRouter);
app.use("", UserRouter);


app.listen(PORT, console.log(`Servidor iniciado en http://localhost:${PORT}`));
