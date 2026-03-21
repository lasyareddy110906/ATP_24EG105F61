//create http server using express framework
import exp from "express"
const app=exp()
import {userApp} from "./apis/userapi.js"
import {productApp} from "./apis/productAPI.js"
//use body body parser middleware to parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(exp.json())//middleware


// forward request to product api when client sends request to /product-api
app.use("/product-api",productApp)


// forward request to user api when client sends request to /user-api
app.use("/user-api",userApp)
//set a port number for the server to listen on
const port=3031;
//assign port number to the server
app.listen(port,()=>console.log(`server is listening on port ${port}`))

