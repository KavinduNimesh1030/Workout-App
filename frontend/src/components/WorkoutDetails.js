import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

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
      <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
      <FontAwesomeIcon icon={faTrash} onClick={deleteWorkout} className='trashIcon'/>
  
    </div>
  )
}
export default workoutdetails
