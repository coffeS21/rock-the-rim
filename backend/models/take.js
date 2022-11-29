const mongoose = require("mongoose")
const Take = mongoose.Schema
//this schema is an object and this object will be the blue print of each take created
const takeSchema = new Take({

    title: {
        type: String,
        required: true, 
        uppercase: true,
        required: true
    },
    discription: {
        type: String,
        lowercase: true
    },
    upVote: {
        type: Number,
        default: 0
    },
    downVote: {
        type: Number,
        default: 0
    },
    user: {
      type: Take.Types.ObjectId,
      ref: "User",
      required: true
  },
})
module.exports = mongoose.model("Take", takeSchema)
/**
 * Issue.js ( related to the user that created it )
Comment.js ( related to the issue it was commented on, and related to the user that created the comment )
give the id of the 1 to the many
 */