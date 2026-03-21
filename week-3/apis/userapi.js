//create mini-express app(seperate route)
import exp from "express"
export const userApp=exp.Router()//create mini express app for user api
// User API
let users=[]

//create user api(REST API--> representational state transfer) 
//app.method(path,request handler)

//route handler for GET request of client(http://localhost:3030/users)
userApp.get("/users",(req,res)=>{
res.json({message:"all users",payload:users})
})


userApp.get("/users/:id",(req,res)=>{
let idofurl=Number(req.params.id);
    let user=users.find(userObj=>userObj.id===idofurl);
    if(user===undefined){
        return res.status(404).json({message:"user not found"})
    }else{
        res.json({message:"user found",payload:users})
    }
})

//route handler for PUT request of client
userApp.put("/users",(req,res)=>{
    let modifiedUser=req.body;
    let userIndex=users.findIndex(userObj=>userObj.id===modifiedUser.id);
    if(userIndex==-1){
        return res.status(404).json({message:"user not found"})
    }
    users.splice(userIndex,1,modifiedUser)
    res.json({message:"user updated successfully"})    
})


//route handler for POST request of client
userApp.post("/users",(req,res)=>{
   const newUser=req.body;
    users.push(newUser);
    res.json({message:"user created successfully"})
})//req-->request object, res-->response object

//route handler for DELETE request of client
userApp.delete("/users/:id",(req,res)=>{
    let idofurl=Number(req.params.id);
    let index=users.findIndex(userObj=>userObj.id===idofurl);
    if(index==-1){
        return res.status(404).json({message:"user not found"})
    }
    users.splice(index,1);
    res.json({message:"user deleted successfully"})
})//req-->request object, res-->response object


