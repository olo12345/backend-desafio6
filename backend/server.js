import express from "express";
import "dotenv/config";
import cors from "cors";
import UserRouter from "./routes/user.routes.js";
import AuthRouter from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("", AuthRouter);
app.use("", UserRouter);


app.listen(PORT, console.log(`Servidor iniciado en http://localhost:${PORT}`));
