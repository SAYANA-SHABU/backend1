const express= require("express")
const stu= new express()
stu.use(express.json())
const starray = [
    {Name:"Anju",Age:20,Course:"CS" ,Id:1},
    {Name:"Anu",Age:19,Course:"Maths",Id:2},
    {Name:"Amal",Age:20,Course:"CS",Id:3},
    {Name:"Ania",Age:20,Course:"CS" ,Id:4},
    {Name:"Miya",Age:19,Course:"Maths",Id:5},
    {Name:"mal",Age:20,Course:"CS",Id:6}
]
stu.put('/updt',(req,res)=>{
    starray.splice(1,1,req.body)
    res.send("Update successfully!!");
})
    
stu.post('/add',(req,res)=>{
    console.log(req.body)
    starray.push(req.body)
    res.send("data added");
})
    
stu.get('/view',(req,res)=>{
    res.send(starray)
})

stu.listen(4040,()=>{
    console.log("port is running")
})