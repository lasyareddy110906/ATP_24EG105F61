import exp from "express"
import {userModel} from "../models/userModel.js"
import {hash,compare} from "bcrypt"
import jwt from 'jsonwebtoken'
import { verifyToken } from "../middleware/verifyToken.js"
export const adminApp = exp.Router()


//get all users and authors
adminApp.get("/users", verifyToken("ADMIN"), async (req, res) => {
    const list = await userModel.find({ isUserActive: true })

    res.status(200).json({message: "users",payload: list})
})


//block or activate user & author
adminApp.put("/users", verifyToken("ADMIN"), async (req, res) => {
    const { userId } = req.body

    const user = await userModel.findById(userId)

    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }

    user.isUserActive = false
    await user.save()

    res.status(200).json({ message: "User blocked" })
})