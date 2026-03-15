import {Schema,SchemaType,model } from 'mongoose'

const commentSchema=new Schema({
    user:{
   type:Schema.Types.ObjectId,
   ref:"user",
   required:[true,"user id is required"]
    },
    comment:{
        type:String
    }
})

const articleSchema=new Schema({
    author:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:[true,"author is required"]
    },
    title:{
        type:String,
        required:[true,"title is required"]
    },
    category:{
        type:String,
        required:[true,"category is required"]
        
    },
    content:{
        type:String,
        required:[true,"content is required"]
    },
    comments:[{type:commentSchema,default:[],required:[true,"comment required"]}],
    isArticleActive:{
        type: Boolean,
        default: true
    }
},{
    versionKey:false,
    timestamps:true
})


export const articleModel = model('article', articleSchema);