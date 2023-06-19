const Workout = require('../model/workoutModel')
//get all workout

//get a single workout

//post a workout

const createWorkout = async (req,res)=>{
    const {title,load,reps} = req.body

    try{
        const workout =  await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error : error.message})
    }
   
}

//update a workout

//delete a workout

module.exports = {
    createWorkout
}