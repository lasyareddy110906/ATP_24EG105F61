//create http server using express framework
import exp from "express"
const app=exp()
const port=3031;
app.use(exp.json())
import {userApp} from "./apis/userapi.js"
import {productApp} from "./apis/productsAPI.js"
//use body body parser middleware to parse incoming request bodies in a middleware before your handlers, available under the req.body property.


function middleware1(req,res,next){
    //reponse to client
    //res.json({message:"this res from middlesware1"})
    //forward the request to the next middleware or route handler
    console.log("executed middleware1")
    next()
}

function middleware2(req,res,next){
    //reponse to client
    //res.json({message:"this res from middlesware1"})
    //forward the request to the next middleware or route handler
    console.log("executed middleware2")
    next()
}
app.use(middleware1)//middleware custom
app.use(middleware2)

// forward request to product api when client sends request to /product-api
app.use("/product-api",productApp)


// forward request to user api when client sends request to /user-api
app.use("/user-api",userApp)

//set a port number for the server to listen on

//assign port number to the server
app.listen(port,()=>console.log(`server is listening on port ${port}`))

