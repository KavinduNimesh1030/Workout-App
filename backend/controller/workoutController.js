const Workout = require('../model/workoutModel')
const mongoose = require('mongoose')

//get all workout
const getWorkouts = async (req,res) =>{
    const workouts = await Workout.find({}).sort({createdAt :-1})
    res.status(200).json(workouts)
}

//get a single workout
const getWorkout = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "no such workout"})
    }
    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error : "no such workout"})
    }
    res.status(200).json(workout)
}

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
const updateWorkout = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "not in valid id"})
    }

    try{
        const workout = await Workout.findOneAndUpdate({_id : id},{
            ...req.body
        })
        if(!workout){
            return res.status(404).json({error : "no such workout"})
        }
        res.status(200).json({msg : "deleted..!"})

    }catch(error){
        res.status(400).json({error : error.message})
    }
}

   

//delete a workout
const deleteWorkout = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "not in valid id"})
    }

    try{
        const workout = await Workout.findOneAndDelete({_id : id})
        if(!workout){
            return res.status(404).json({error : "no such workout"})
        }
        res.status(200).json({msg : "updated..!"})

    }catch(error){
        res.status(400).json({error : error.message})
    }
    
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout

}