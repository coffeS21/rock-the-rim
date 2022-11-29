const mongoose = require("mongoose")
const User = mongoose.Schema

const userSchema = new User({
    username: {
      type:  String, 
    required: true, 
    lowercase: true,
    unique: true
    },
    password: {
      type: String,
      required: true
    },
    joinDate: {
      type: Date,
      default: Date.now
    }
})
module.exports = mongoose.model("User", userSchema)