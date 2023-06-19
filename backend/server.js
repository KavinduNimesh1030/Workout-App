const express = require('express')
const workoutRoutes = require('./routes/workout')
const mongoose = require('mongoose');
//express app
const app = express()

//midleware
app.use(express.json()) 

//routes
app.use('/api/workouts',workoutRoutes)

mongoose.connect(
    "mongodb://127.0.0.1:27017/workout"
).then(()=>{
//listner
app.listen(4000,()=>{
    console.log("Connected to db & App runing on port 4000")
})

}).catch((err)=>{
    console.error(err)
})

