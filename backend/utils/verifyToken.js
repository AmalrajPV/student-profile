import jwt from "jsonwebtoken";


export const verifyToken = (req, res, next) =>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(400).json({message: "you are not authenticated"});
    jwt.verify(token, process.env.SECRET, (err, user)=>{
        if (err) return res.status(400).json({message: "invalid token"});
        req.user = user;
        next();
    })
}

export const verifyUser = (req, res, next) =>{
    verifyToken(req, res, next, ()=>{
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();     
        } else {
            return res.status(400).json({message: "you are not authorized"});
        }
    })
}

export const verifyUserOnly = (req, res, next) =>{
    verifyToken(req, res, next, ()=>{
        if (req.user.id === req.params.id) {
            next();     
        } else {
            return res.status(400).json({message: "you are not authorized"});
        }
    })
}


export const verifyAdmin = (req, res, next) =>{
    verifyToken(req, res, ()=>{
        if (req.user.isAdmin) {
            next();     
        } else {
            return res.status(400).json({message: "you are not authorized"});
        }
    })
}