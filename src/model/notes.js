import mongoose, { mongo } from "mongoose";

const notesSchema = new mongoose.Schema({
  tittle:String,
  discription:String
})

const noteModel = mongoose.model("note", notesSchema);

export default noteModel