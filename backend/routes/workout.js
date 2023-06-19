const express = require('express');
const Workout = require('../model/workoutModel')

const router = express.Router()

//get all workout
router.get('/',(req,res)=>{
    res.json({msg : 'get all workouts'})
})

//get single workout
router.get('/:id',(req,res)=>{
    res.json({msg : 'get single workouts'})
})

//post a new workout
router.post('/',async (req,res)=>{
    const {title,load,reps} = req.body

    try{
        const workout =  await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error : error.message})
    }
   
})

//delete workout
router.delete('/:id',(req,res)=>{
    res.json({msg : 'Delete a  workout'})
})
//update workout
router.patch('/:id',(req,res)=>{
    res.json({msg : 'update a  workout'})
})


module.exports = router