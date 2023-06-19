const express = require('express');
const {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout} = require('../controller/workoutController')


const router = express.Router()

//get all workout
router.get('/',getWorkouts)

//get single workout
router.get('/:id',getWorkout)

//post a new workout
router.post('/',createWorkout)

//delete workout
router.delete('/:id',deleteWorkout)

//update workout
router.patch('/:id',updateWorkout)


module.exports = router