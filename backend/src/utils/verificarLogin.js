const verificarLogin = (req, res, next) => {
    console.log(req.body);
    const { email, password } = req.body;
    if (!email || !password) throw { code: 401, message: "Falta llenar todas las credenciales" }
    else {
        req.user = {email, password};
        next()
    }
}

export default verificarLogin;