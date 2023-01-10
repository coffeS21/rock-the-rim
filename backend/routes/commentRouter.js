const express = require("express")
const commentRouter = express.Router()
const Comment = require("../models/comment.js")

// //get all comment
commentRouter.get("/", (req, res, next)=>{
    Comment.find((err, comment)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comment)
    })
})

//get comments by take
/**
 * in the comments page with the comment display the take title
 */

commentRouter.post("/:takeId/:userId", (req,res,next)=>{ 
    req.body.take = req.params.takeId
    req.body.user = req.params.userId
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