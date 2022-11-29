const express = require("express")
const userRouter = express.Router()
const User = require("../models/user")

//get all users
userRouter.get("/", (req,res, next)=>{
    User.find((err, users)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(users)
    })
})

//create a new user
userRouter.post("/", (req,res,next)=>{
    const newUser = new User(req.body)
    newUser.save((err, savedUser)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedUser)
    })
})

//delete user
userRouter.delete("/:userId", (req,res,next)=>{
    User.findOneAndDelete({_id:req.params.userId}, (err, deletedUser)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send("user has been removed")
    })
})

module.exports = userRouter