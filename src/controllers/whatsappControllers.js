const VerifyToken =(req, res)=>{

    res.send("hola verifying token prueba local")
}

const ReceiveMessage=(req, res)=>{

    res.send("hola received")
}
module.exports ={ VerifyToken, ReceiveMessage }