//create mini express application(seperate route)
import exp from 'express'
import bcrypt from 'bcryptjs'

export const userApp=exp.Router()
import {userModel} from '../models/usermodel.js'//.. current folder, .js extension is must in import statement

//define user rest api
userApp.post('/users', async (req,res)=>{



const newUser = req.body

console.log("Password before hashing:", newUser.password)

const hashedPassword = await bcrypt.hash(newUser.password,10)

console.log("Hashed password:", hashedPassword)

newUser.password = hashedPassword

const newUserDocument = new userModel(newUser)

const result = await newUserDocument.save()

console.log("Saved user:", result)

res.status(201).json({message:"user created successfully"})



})

userApp.get('/users',async (req,res)=>{
    try{
        let usersList=await userModel.find()
        res.status(200).json({message:"users list",payload:usersList})
    }catch(err){
        console.log("error in getting users",err)
        res.status(500).json({message:"error in getting users"})
    }
})





userApp.get('/users/:id',async (req,res)=>{
    try{
        const uid=req.params.id
        
        const userobj=await userModel.findById(uid)
        
        if(!userobj){
            return res.status(404).json({message:"user not found"})
        }
        
        res.status(200).json({message:"user found",payload:userobj})
    }catch(err){
        console.log("error in getting user",err)
        res.status(500).json({message:"error in getting user"})
    }
})



userApp.put('/users/:id', async (req,res)=>{

    try{

        const modifiedUser = req.body
        const uid = req.params.id

        const updatedUser = await userModel.findByIdAndUpdate(
            uid,
            { $set:{...modifiedUser} },
            { returnDocument: 'after', runValidators:true }
        )

        if(!updatedUser){
            return res.status(404).json({message:"user not found"})
        }

        res.status(200).json({
            message:"user modified successfully",
            user: updatedUser
        })

    }
    catch(err){
        res.status(500).json({message:"error updating user", error:err.message})
    }

})
//use findOne method to read a document with non object id fields
//use findById method to read a document with object id fields


userApp.delete('/users/:id', async (req,res)=>{

        const uid = req.params.id

        const deletedUser = await userModel.findByIdAndDelete(uid)  
     if(!deletedUser){
            return res.status(404).json({message:"user not found"})
        }
        res.status(200).json({message:"user deleted successfully"})
    
})
