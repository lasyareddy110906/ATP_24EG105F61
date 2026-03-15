import exp from "express"
import { articleModel } from "../models/articleModel.js"
import {userModel} from "../models/userModel.js"
import {verifyToken} from "../middleware/verifyToken.js"

export const userApp = exp.Router()

//read articles of all authors
userApp.get("/articles",verifyToken("USER"),async(req,res)=>{
    //read article
    const articleList=await articleModel.find({isArticleActive:true}).populate('author', 'firstName lastName email').populate('comments.user', 'firstName lastName email')
    //send res
    res.status(200).json({message:"articles",payload:articleList})

})
//add comment to an article
userApp.put("/articles",verifyToken("USER"),async(req,res)=>{
    //get req body
    const {articleId,comment}=req.body
    //check article
    const articleDoc=await articleModel.findOne({_id:articleId,isArticleActive:true})
    //if article not found
    if(!articleDoc){
        res.status(404).json({message:"article not found"})
    }
    //get user id
    const userId=req.user?.id
    //add comments to comment array of document
    articleDoc.comments.push({user:userId,comment:comment})
    //save
    await articleDoc.save()
    //fetch updated article with populate
    const updatedArticle = await articleModel.findById(articleId)
    //send res
    res.status(200).json({message:"comment added",payload:updatedArticle})
})