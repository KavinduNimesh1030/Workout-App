import React from 'react'

const workoutdetails = ({workout}) => {
  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p><storng>load : </storng>{workout.load}</p>
      <p><storng>Reps : </storng>{workout.reps}</p>
      <p><storng>Created at : </storng>{workout.createdAt}</p>
    </div>
  )
}
export default workoutdetails
