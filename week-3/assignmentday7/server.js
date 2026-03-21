
import exp from 'express'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import {userApp} from './APIs/userAPI.js'
import {productApp} from './APIs/productAPI.js'
import e from 'express'
const app=exp()
app.use(exp.json())

//use the userApp router
app.use('/user-api', userApp)

//use the productApp router
app.use('/product-api', productApp)

app.listen(4000,()=>{
    console.log("server on port 4000")
})

async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/mydb")
        console.log("db connection successful")
    }catch(err){
        console.log("err in the db",err)
        process.exit(1)
    }
}

connectDB()


//error handling middleware
app.use((err,req,res,next)=>{
    console.log(err.name)
    console.log(err.stack)
    console.log(err.message)
    //validation error
    if(err.name==="ValidationError"){
        return res.status(400).json({message:"error occured ",error:err.message})
    }
    //cast error
    if(err.name==="CastError"){
        return res.status(400).json({message:"error occured ",error:err.message})
    }
    //mongoose error
    if(err.name==="MongooseError"){
        return res.status(500).json({message:"error occured ",error:err.message})
    }

})


// 200->success
// 201->resource created successfully
// 400->bad request
// 401->unauthorized
// 404->not found
// 500->internal server error
// status codes are used to indicate the status of the response, it is a three digit number, the first digit indicates the class of the status code, the second and third digits indicate the specific status code within that class. For example, 200 is a success status code, 201 is a resource created successfully status code, 400 is a bad request status code, 404 is a not found status code, 500 is an internal server error status code.
// adding status code in the response is important because it helps the client to understand the status of the response and take appropriate action based on that. For example, if the client receives a 200 status code, it can assume that the request was successful and proceed with processing the response. If the client receives a 400 status code, it can assume that there was a problem with the request and take appropriate action to fix it before resending the request. If the client receives a 404 status code, it can assume that the requested resource was not found and take appropriate action to handle that situation. If the client receives a 500 status code, it can assume that there was an internal server error and take appropriate action to handle that situation.


