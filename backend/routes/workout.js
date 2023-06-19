const express = require('express');
const {createWorkout,getWorkout,getWorkouts} = require('../controller/workoutController')


const router = express.Router()

//get all workout
router.get('/',getWorkouts)

//get single workout
router.get('/:id',getWorkout)

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