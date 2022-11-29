const express = require("express")
const server = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const {expressjwt} = require('express-jwt')
const chai = "mongodb+srv://chai:chai@rock-the-rim.ui09hkl.mongodb.net/?retryWrites=true&w=majority"


//dot env vars
process.env.SECRET
//middlewear
server.use(express.json())
server.use(morgan("dev"))

//routes
server.use("/auth", require("../routes/authRouter"))
server.use("/api", expressjwt({secret: process.env.SECRET,algorithms: ['HS256']})) //req.user -  this is the payload//this is how you know what user is making a take
server.use("/api/takes", require("../routes/takeRouter"))
server.use("/opinions", require("../routes/opinionRouter"))
server.use("/user", require("../routes/userRouter"))

//error handlers
server.use((err, req, res, next)=> {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})
//servers
mongoose.connect(chai)
mongoose.connection.on("connected", ()=>{
    console.log("its on baby")
})
server.listen(8000, ()=>{
    console.log("test")
})