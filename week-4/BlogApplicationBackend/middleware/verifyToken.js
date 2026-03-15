import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
const {verify}=jwt
config()

export const verifyToken=(...allowedRoles)=>{
    
    return (req,res,next)=>{
        //get token from cookie
        try{
   const token= req.cookies?.token //{token: res.cookie}
   //if token exists
   if(!token){
    return res.status(401).json({message:"please login first"})
   }
   //validate token
   let decodedToken= verify(token,process.env.SECRET_KEY)
   //check the role is same as the token decoded role
   if(!allowedRoles.includes(decodedToken.role)){
    return res.status(403).json({message:"you are not authorized"})
   }

   //add decoded token
   req.user=decodedToken
   next()
    }catch(err){
    return res.status(401).json({message:"invalid token"})
}
}
}


