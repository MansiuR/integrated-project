import express from "express";
import noteModel from "./model/notes.js";
import cors from "cors";


const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static("./public"));


app.post("/api/note" , async (req,res) =>{
  const{tittle,discription}= req.body

  const notes = await noteModel.create({
    tittle,
    discription
  })

  res.status(201).json({
    message:"note created successfully",
    notes
  })
})

app.get("/api/note" , async (req,res) =>{
 const notes = await noteModel.find()

 res.status(200).json({
  message:"note featched successfully",
  notes
 })
})

app.delete("/api/note/:id" , async (req,res) =>{
  const id = req.params.id

 await noteModel.findByIdAndDelete(id)

  res.status(200).json({
    message:"note deleted successfully",
  })
  
})

app.patch("/api/note/:id" , async (req,res) =>{
  const id = req.params.id
  const{discription}= req.body

  await noteModel.findByIdAndUpdate(id,{discription})
  
  res.status(200).json({
    message:"note updated successfully"
  })
})


// app.use('*name',(req,res)=>{
//   res.sendFile("D:/Codes/cohot_2_0/backend/day9/Backend/public/index.html")
// })

export default app;