import ex from'express'
export const productApp=ex.Router()//create mini express app for product api



let products=[]
productApp.post('/products', (req, res) => {
    const newProduct = req.body
    products.push(newProduct)
    res.json({ message: "Product added" })
})



productApp.get("/products",(req,res)=>{
res.json({message:"all products",payload:products})
})



productApp.get("/products/:brand",(req,res)=>{
let brandofurl=req.params.brand;
    let product=products.find(productObj=>productObj.brand===brandofurl);
    if(product===undefined){
        return res.status(404).json({message:"product not found"})
    }else{
        res.json({message:"product found",payload:product})
    }
})




productApp.put("/products/:id",(req,res)=>{
    let modifiedProduct=req.body;
    let productIndex=products.findIndex(productObj=>productObj.id===modifiedProduct.id);
    if(productIndex==-1){
        return res.status(404).json({message:"product not found"})
    }
    products.splice(productIndex,1,modifiedProduct)
    res.json({message:"product updated successfully"})    
})





productApp.delete("/products/:id",(req,res)=>{
    let idofurl=Number(req.params.id);
    let index=products.findIndex(productObj=>productObj.id===idofurl);
    if(index==-1){
        return res.status(404).json({message:"product not found"})
    }
    products.splice(index,1);
    res.json({message:"product deleted successfully"})
})