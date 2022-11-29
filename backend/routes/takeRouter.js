const express = require("express")
const takeRouter = express.Router()
const Take = require("../models/take")

//go to eps #9 for testing instructions
//create templets and create:
//5 users with 2 takes

//get all takes
takeRouter.get("/", (req, res, next)=>{
    Take.find((err, takes)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(takes)
    })
})

// get takes by id

takeRouter.get("/user", (req, res, next) => {
    Take.find({user: req.auth._id}, (err, takes) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(takes)
    })
})

//create new take
takeRouter.post("/", (req,res,next)=>{
    req.body.user = req.auth._id
    const newTake = new Take(req.body)
    newTake.save((err, savedTake)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedTake)
    })
})

//delete take
takeRouter.delete("/:takeId", (req,res,next)=>{     /**the "user: req.user._id"
                                                    is used so that a take will
                                                    only be deleted by the user
                                                    who created it  */
    Take.findOneAndDelete({_id:req.params.takeId, user: req.user._id}, (err, deletedTake)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`the take titled ${deletedTake.title} has been removed from the data base `)
    })
})

takeRouter.put("/:takeId", (req,res,next) => {
    Take.findOneAndUpdate({_id: req.params.takeId, user: req.auth._id}, 
        req.body,
        {new: true},
        (err, updatedTake) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedTake)
        })
})

module.exports = takeRouter