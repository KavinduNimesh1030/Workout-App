import React, { useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext';

const WorkoutForm = () => {
    const{dispatch} = useWorkoutContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const workout = {title,load,reps}

        const response = await fetch('/api/workouts/',{
            method : 'POST',
            body : JSON.stringify(workout),
            headers:{
                'content-Type' : 'application/json'
            }
        })
        const json =  await response.json()

        if(!response.ok){
            setError(json.error)
        }else{
            setError(null)
            setTitle('')
            setReps('')
            setLoad('') 
            dispatch({type : 'CREATE_WORKOUT',payload : json})
            alert('new Workout added..!',json)
        }
        

    }

    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>

            <lable>Excersize Title :</lable>
            <input
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <lable> Load (in kg) :</lable>
            <input
                type='number'
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <lable> Reps :</lable>
            <input
                type='number'
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />
            <button className='btnsubmit'>Add Workout</button>
            {error && <div className='error'>{error}</div>}

        </form>
    )
}
export default WorkoutForm
