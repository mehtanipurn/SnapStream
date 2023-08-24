const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const storySchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        require: true
    },
    postedBy: {
        type: ObjectId,
        ref: "USER"
    }
}, { timestamps: true })

mongoose.model("STORY", storySchema)