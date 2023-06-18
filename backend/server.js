const express = require('express')

//express app
const app = express()

//midleware
app.use((req,res,next)=>{
    console.log(req.method,req.path)
    next()
})

//get request
app.get("/",(req,res)=>{
        res.json({"massage" : "Hellooow"})
})

//listner
app.listen(4000,()=>{
    console.log("App runing on port 4000")
})
