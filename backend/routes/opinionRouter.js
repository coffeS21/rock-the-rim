const express = require("express")
const opinionRouter = express.Router()
const Opinion = require("../models/opinion")

//get all opinions
opinionRouter.get("/", (req, res, next)=>{
    Opinion.find((err, opinions)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(opinions)
    })
})

//create new opinion
opinionRouter.post("/:takeId", (req,res,next)=>{
    req.body.take = req.params.takeId
    const newOpinion = new Opinion(req.body)
    newOpinion.save((err, savedOpinion)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedOpinion)
    })
})

//delete opinion
opinionRouter.delete("/:opinionId", (req,res,next)=>{
    Opinion.findOneAndDelete({_id:req.params.opinionId}, (err, deletedOpinion)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send("your opinion on this topic has been removed")
    })
})

module.exports = opinionRouter