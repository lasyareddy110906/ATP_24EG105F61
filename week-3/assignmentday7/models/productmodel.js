import {Schema,model} from 'mongoose'

const productSchema=new Schema({
    productId:{
        type:String,
        required:[true,"productId is required"],
        unique:[true,"productId already exists"]
    },
    productName:{
        type:String,
        required:[true,"productName is required"]
    },
    price:{
        type:Number,
        required:[true,"price is required"],
        min:[10000,"price should be greater than 10000"],
        max:[50000,"price should be less than 50000"]
    },
    brand:{
        type:String,
        required:[true,"brand is required"]
    }
    },{versionKey:false,timestamps:true})


export const productModel=model("product",productSchema)