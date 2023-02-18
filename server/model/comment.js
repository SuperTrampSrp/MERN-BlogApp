import mongoose from "mongoose";


const commentSchema = mongoose.Schema({
    name : {
        type: String,
        required :true
    },
    id : {
        type: String,
        required :true
    },
    date : {
        type: String,
        required :true
    },
    comment : {
        type: String,
        required :true
    }
})
const comment = mongoose.model('commnents', commentSchema);
export default comment;