import exp from "express"
import { articleModel } from "../models/articleModel.js"
import {userModel} from "../models/userModel.js"
import {verifyToken} from "../middleware/verifyToken.js"
export const authorApp = exp.Router()



//write articles(protected--later)
authorApp.post("/article",verifyToken("AUTHOR"),async(req,res)=>{
    //get article object from client
    const articleObj=req.body
    //get user from decoded token
    let user=req.user
    //check author
    let author = await userModel.findById(articleObj.author)
    if(!author){
        return res.status(404).json({message:"invalid author"})
    }
    if(author.email !== user.email){
            return res.status(403).json({message:"you are not authorized"})
        }
    
    
    //create article document
    const articleDoc=new articleModel(articleObj)
    //save
    await articleDoc.save()
    //send res
    res.status(201).json({message:"article saved"})
})
//read own articles
authorApp.get("/article",verifyToken("AUTHOR"),async(req,res)=>{
    //get articles 
   let user = req.user

        //find author
        let author = await userModel.findOne({email:user.email})

        //get articles written by this author
        let userArticles = await articleModel.find({author:author._id}).populate('author', 'firstName lastName email').populate('comments.user', 'firstName lastName email')

        res.status(200).json({message:"articles list",payload:userArticles })

})
//edit articles
authorApp.put("/article",verifyToken("AUTHOR"),async(req,res)=>{
    //get author id from decoded token
    const authorIdOfToken=req.user?.id
    //get modified article from client
    const {articleId, title, category, content}= req.body
    const modifiedarticle=await articleModel.findOneAndUpdate({_id:articleId,author: authorIdOfToken},{$set:{title,category,content}},{new:true}).populate('author', 'firstName lastName email').populate('comments.user', 'firstName lastName email')
    if(!modifiedarticle){
        res.status(403).json({message:"not authorized" })
    }
    res.status(200).json({message:"article updated",payload:modifiedarticle })

})
//delete articles(soft delete)
authorApp.patch("/article",verifyToken("AUTHOR"),async(req,res)=>{

    const authorIdOfToken=req.user?.id
    //get modified article from client
    const {articleId}= req.body
    const modifiedarticle=await articleModel.findOneAndUpdate({_id:articleId,author: authorIdOfToken},{$set:{isArticleActive:false}},{new:true}).populate('author', 'firstName lastName email').populate('comments.user', 'firstName lastName email')
    if(!modifiedarticle){
        return res.status(403).json({message:"not authorized" })
    }
    res.status(200).json({message:"article deleted",payload:modifiedarticle })
})

