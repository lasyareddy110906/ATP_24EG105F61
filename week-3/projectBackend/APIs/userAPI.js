//create mini express application(seperate route)

//define user rest api

import exp from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const { sign } = jwt

export const userApp = exp.Router()

import { verifyToken } from '../middlewares/verifyToken.js'
import { userModel } from '../models/usermodel.js'
import { compare } from 'bcryptjs'


// ======================
// USER LOGIN
// ======================
userApp.post('/auth', async (req,res)=>{
    try{

        const {email,password} = req.body

        //check email
        let user = await userModel.findOne({email:email})

        if(!user){
            return res.status(404).json({message:"Invalid email"})
        }

        //compare password
        let result = await compare(password,user.password)

        if(!result){
            return res.status(401).json({message:"Invalid password"})
        }

        //generate token
        const signedToken = sign(
            {email:user.email},
            process.env.SECRET_KEY,
            {expiresIn:"1d"}
        )

        //store token in cookie
        res.cookie("token",signedToken,{
            httpOnly:true,
            sameSite:"lax",
            secure:false
        })

        return res.status(200).json({
            message:"Login successful",
            payload:user
        })

    }catch(err){
        res.status(500).json({message:"Login error",error:err.message})
    }
})



// ======================
// CREATE USER (SIGNUP)
// ======================
userApp.post('/users', async (req,res)=>{

    try{

        const newUser = req.body

        const hashedPassword = await bcrypt.hash(newUser.password,10)

        newUser.password = hashedPassword

        const newUserDocument = new userModel(newUser)

        const result = await newUserDocument.save()

        console.log("Saved user:", result)

        return res.status(201).json({
            message:"user created successfully"
        })

    }catch(err){
        res.status(500).json({
            message:"error creating user",
            error:err.message
        })
    }

})



// ======================
// GET ALL USERS
// ======================
userApp.get('/users',verifyToken,async (req,res)=>{

    try{

        let usersList = await userModel.find()

        res.status(200).json({
            message:"users list",
            payload:usersList
        })

    }catch(err){

        console.log("error in getting users",err)

        res.status(500).json({
            message:"error in getting users"
        })

    }

})



// ======================
// GET CURRENT USER
// ======================
userApp.get('/user',verifyToken,async (req,res)=>{

try{

const emailOfUser = req.user?.email

const userobj = await userModel.findOne({email:emailOfUser}).populate("cart.product")

if(!userobj){
    return res.status(404).json({message:"user not found"})
}

return res.status(200).json({message:"user found",payload:userobj
})

}catch(err){

return res.status(500).json({message:"error fetching user"})

}

})



// ======================
// UPDATE USER
// ======================
userApp.put('/users/:id', async (req,res)=>{

    try{

        const modifiedUser = req.body

        const uid = req.params.id

        //hash password if updated
        if(modifiedUser.password){
            modifiedUser.password = await bcrypt.hash(modifiedUser.password,10)
        }

        const updatedUser = await userModel.findByIdAndUpdate(
            uid,
            {$set:{...modifiedUser}},
            {returnDocument:'after',runValidators:true}
        )

        if(!updatedUser){
            return res.status(404).json({
                message:"user not found"
            })
        }

        return res.status(200).json({
            message:"user modified successfully",
            user:updatedUser
        })

    }catch(err){

        res.status(500).json({
            message:"error updating user",
            error:err.message
        })

    }

})



// ======================
// DELETE USER
// ======================
userApp.delete('/users/:id', async (req,res)=>{

    try{

        const uid = req.params.id

        const deletedUser = await userModel.findByIdAndDelete(uid)

        if(!deletedUser){
            return res.status(404).json({
                message:"user not found"
            })
        }

        return res.status(200).json({
            message:"user deleted successfully"
        })

    }catch(err){

        res.status(500).json({
            message:"error deleting user"
        })

    }

})



// ======================
// ADD PRODUCT TO CART
// ======================
userApp.put('/cart/product-id/:pid',verifyToken, async (req,res)=>{

    try{

        let productId = req.params.pid

        const emailOfUser = req.user?.email

        console.log("User email:",emailOfUser)

        let result = await userModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}},{new:true}
        )

        if(!result){
            return res.status(404).json({message:"user not found"
            })
        }

        return res.status(200).json({message:"product added to cart",payload:result
        })

    }catch(err){

        console.log(err)

        return res.status(500).json({message:"Server error"
        })

    }

})



/*
userApp.put('/cart/product-id/:pid',verifyToken, async (req,res)=>{

    try{

        let productId = req.params.pid

        const emailOfUser = req.user?.email

        //before add it should check if product already exists in the cart
        let userDoc = await userModel.findOne({email:emailOfUser})
        
        if(!userDoc){
            return res.status(404).json({message:"user not found"})
        }
        
        let item = userDoc.cart.find(cartItem => cartItem.product.toString() === productId)
        
        // if product exists add 1 to count
        //else add new product

        console.log("User email:",emailOfUser)

        let result = await userModel.findOneAndUpdate(
            {email:emailOfUser},
            {$push:{cart:{product:productId}}},
            {new:true}
        )

        return res.status(200).json({message:"product added to cart",payload:result})

    }catch(err){

        console.log(err)

        return res.status(500).json({message:"Server error"
        })

    }

})

*/