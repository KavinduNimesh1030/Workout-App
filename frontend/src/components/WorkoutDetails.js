import React from 'react'

const workoutdetails = ({workout}) => {

  const deleteWorkout = async()=>{
    const response =  await fetch('/api/workouts/'+workout._id,{
      method : 'DELETE',
    })

    const json =  await response.json()

    if(!response.ok){
        alert(json.error)
    }else{
        alert('Deleted..!',json)
    }
    

  }
  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p><storng>load : </storng>{workout.load}</p>
      <p><storng>Reps : </storng>{workout.reps}</p>
      <p><storng>Created at : </storng>{workout.createdAt}</p>
      <button onClick={deleteWorkout}>delete</button>
    </div>
  )
}
export default workoutdetails
