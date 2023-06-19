const express = require('express');
const {createWorkout} = require('../controller/workoutController')


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
router.post('/',createWorkout)

//delete workout
router.delete('/:id',(req,res)=>{
    res.json({msg : 'Delete a  workout'})
})
//update workout
router.patch('/:id',(req,res)=>{
    res.json({msg : 'update a  workout'})
})


module.exports = router