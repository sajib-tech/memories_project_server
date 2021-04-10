import mongoose from "mongoose";


const postShema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tag: [String],
    selectedFile: String,
    likeCount: {
        type: String,
        default: 0,
    },
    createdAt: {
        type: String,
        default: new Date()
    }
});

const postMessage = mongoose.model("postMesage",postShema);

export default postMessage;