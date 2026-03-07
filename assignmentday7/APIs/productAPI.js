import exp from 'express'

export const productApp=exp.Router()
import {productModel} from '../models/productmodel.js'//.. current folder, .js extension is must in import statement



productApp.post('/products', async (req,res)=>{
    const newProduct=req.body
    const newProductDocument=new productModel(newProduct)
    const result=await newProductDocument.save()
    console.log("Saved product:", result)
    res.status(201).json({message:"product created successfully"})
})


productApp.get('/products',async (req,res)=>{
    try{
        let productsList=await productModel.find()
        res.status(200).json({message:"products list",payload:productsList})
    }catch(err){
        console.log("error in getting products",err)
        res.status(500).json({message:"error in getting products"})
    }
})



productApp.get('/products/:id',async (req,res)=>{
    try{
        const pid=req.params.id
        
        const productobj=await productModel.findById(pid)
        
        if(!productobj){
            return res.status(404).json({message:"product not found"})
        }
        
        res.status(200).json({message:"product found",payload:productobj})
    }catch(err){
        console.log("error in getting product",err)
        res.status(500).json({message:"error in getting product"})
    }
})





productApp.put('/products/:id', async (req,res)=>{

    try{

        const modifiedProduct = req.body
        const pid = req.params.id

        const updatedProduct = await productModel.findByIdAndUpdate(
            pid,
            { $set:{...modifiedProduct} },
            { returnDocument: 'after', runValidators:true }
        )

        if(!updatedProduct){
            return res.status(404).json({message:"product not found"})
        }

        res.status(200).json({
            message:"product modified successfully",
            product: updatedProduct
        })

    }
    catch(err){
        res.status(500).json({message:"error updating user", error:err.message})
    }

})





productApp.delete('/products/:id', async (req,res)=>{

        const pid = req.params.id

        const deletedProduct = await productModel.findByIdAndDelete(pid)  
     if(!deletedProduct){
            return res.status(404).json({message:"product not found"})
        }
        res.status(200).json({message:"product deleted successfully"})
    
})