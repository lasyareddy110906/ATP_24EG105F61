import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

export function verifyToken(req,res,next){
//token verification logic
console.log("Token object is ",req.cookies?.token);
//if req is from unauthorised user then token will be undefined
if(!req.cookies?.token){
    return res.status(401).json({message:"please login"})
}
//if token is existed
try{
const decodedToken=jwt.verify(req.cookies.token,"abcdef")
req.user=decodedToken
console.log(decodedToken)
next()
}catch(err){
    res.status(401).json({message:"session expired, please login again"})
}
//to access cookies property of request object we need cookie parser middleware. 
// otherwise req.cookies will be undefined. 
}