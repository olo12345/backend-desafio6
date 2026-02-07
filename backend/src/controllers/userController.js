import { createUserModel, loginUserModel, verificarCredencialesModel, isEmailRegistered } from "./../models/userModel.js";
import jwt from "jsonwebtoken";
import bcryp from "bcrypt";
import "dotenv/config";

const createUser = async (req, res) => {
    try {
        if (await isEmailRegistered(email)) throw { code: 400, message: "Existe un usuario con ese Email registrado previamente" }
        else {
            const { password } = req.body;
            const hashedPassword = bcryp.hashSync(password, 10)
            const newUser = { ...req.body, password: hashedPassword };
            const success = await createUserModel(newUser);
            if (success) res.status(201).send("Se creó el usuario correctamente")
        }
    }
    catch (err) {
        if (err.code === "23502") {
            res.status(400).json({message: "No se ingresó usuario o contraseña"});
        }
        res.status(500).send(err);
    }
}

const loginUser = async (req, res) => {
    try {
        const { password, email } = req.user;
        const result = await loginUserModel(email);
        if (!result.rowCount) throw { code: 404, message: "No se encontró ningún usuario con estas credenciales" }
        else {
            const hashedPass = result.rows[0].password;
            const passMatch = bcryp.compareSync(password, hashedPass);
            if (!passMatch) throw { code: 404, message: "No se encontró ningún usuario con estas credenciales" }
            else {
                const token = jwt.sign({ email }, process.env.JWT_SECRET);
                res.send({ token });
            }
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

const verificarCredenciales = async (req, res) => {
    try {
        const { email } = req.user;
        const result = await verificarCredencialesModel(email);
        if (result.rowCount) console.log(`el usuario ${email} ha sido verificado correctamente`);
        res.status(200).send(result.rows);
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export { createUser, loginUser, verificarCredenciales };