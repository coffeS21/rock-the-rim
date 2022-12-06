const express = require("express")
const commentRouter = express.Router()
const Comment = require("../models/comment.js")

// //get all takes
commentRouter.get("/", (req, res, next)=>{
    Comment.find((err, comment)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comment)
    })
})

//create new comment
commentRouter.post("/:takeId/:userId", (req,res,next)=>{
    console.log(req.params)
    req.body.take = req.params.takeId
    req.body.user = req.auth._id
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})


module.exports = commentRouter