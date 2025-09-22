import mongoose from "mongoose";

//1 - Crete a schema
//2 - Crete a model based off of that schema
const noteSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
},
{ timestamps: true }//createAt, updateAt
);


const Note = mongoose.model("Note", noteSchema)

export default Note