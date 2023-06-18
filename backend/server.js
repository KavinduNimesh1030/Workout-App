const express = require('express')
const workoutRoutes = require('./routes/workout')

//express app
const app = express()

//midleware
app.use(express.json()) 

//routes
app.use('/api/workouts',workoutRoutes)

//listner
app.listen(4000,()=>{
    console.log("App runing on port 4000")
})
