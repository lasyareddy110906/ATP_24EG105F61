import exp from "express"
import {userModel} from "../models/userModel.js"
import {hash,compare} from "bcrypt"
import jwt from 'jsonwebtoken'
import { verifyToken } from "../middleware/verifyToken.js"
export const commonApp = exp.Router()

//route for register
commonApp.post("/users",async(req,res)=>{
    let allowedRoles=['USER','AUTHOR']
    //get user from req
    const newUser=req.body
    //check if role is admin
    if(!allowedRoles.includes(newUser.role)){
        return res.status(400).json({message:"invalid role"})
    }

    //run validators manually
    //hash password and replace plain with hashed one
    newUser.password=await hash(newUser.password,12)
    

    //create new user document
    const newUserDoc=new userModel(newUser)
    //save doc
    await newUserDoc.save()
    res.status(201).json({message:"user created"})
})
//route for login
commonApp.post("/login",async(req,res)=>{
    //get user cred object
    const {email,password}=req.body
    //find user by email
    const user=await userModel.findOne({email:email})
    //if user not found
    if(!user){
        return res.status(404).json({message:"invalid email"})
    }
    //compare password
    const isMatch=await compare(password, user.password)
    //if passwords not matched
    if(!isMatch){
        return res.status(400).json({message:"invalid password"})
    }
    //create jwt
    const signedToken=jwt.sign({id:user._id,email:email,role:user.role},process.env.SECRET_KEY,{expiresIn:"1h"})
    //set token to response header
    res.cookie("token",signedToken,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    //remove password from user document
    let userObj=user.toObject()
    delete userObj.password

    //send res
    res.status(200).json({message:"login success",payload:userObj})
})
//route for logout
commonApp.get("/logout",async(req,res)=>{
    //delete token from cookie storage
    res.clearCookie("token",{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    //send res
    res.status(200).json({message:"logout success"})
})





//change password
commonApp.put("/password", verifyToken("USER","AUTHOR","ADMIN"), async (req,res)=>{
    

        //get passwords from request body
        const { currentPassword, newPassword } = req.body

        if(currentPassword === newPassword){
            return res.status(400).json({message:"both passwords are same"})
        }

        //get logged in user info from token
        const User = req.user

        //find user in database
        const userDoc = await userModel.findOne({ email: User.email })

        if(!userDoc){
            return res.status(404).json({message:"user not found"})
        }

        //compare current password with DB password
        const isMatch = await compare(currentPassword, userDoc.password)

        if(!isMatch){
            return res.status(400).json({message:"current password is incorrect"})
        }

        //hash new password
        const hashedPassword = await hash(newPassword,12)

        //replace password
        userDoc.password = hashedPassword

        await userDoc.save()

        res.status(200).json({message:"password edited"})
    
})