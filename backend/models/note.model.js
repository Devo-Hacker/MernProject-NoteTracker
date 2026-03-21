//we have to design the notepad schemna
//means we have to give it a structure how the things will be stored in my structure 
import mongoose from 'mongoose';
const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true, //means the input field is compulsory
        trim:true //means the spaces we give while writing sentence will not be counted
    },
    content:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true
})

const Note = mongoose.model("Note",noteSchema);
export default Note; //basically Note is our datbase and can be used anywhere