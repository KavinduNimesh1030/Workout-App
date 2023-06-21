import React, { useEffect, useState } from 'react'
import Axios from 'axios';

import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {

    const [workouts ,setworkouts] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:4000/api/workouts/").then((response)=>{
         console.log(response.data);
            setworkouts(response.data);
        })
       }, []);
    
  return (
    <div className='home'>
        <div className='workouts'>
        {workouts && workouts.map((workout)=>(
            <WorkoutDetails key ={workout._id} workout = {workout}/>
        ))}
        </div>
        <WorkoutForm/>
    </div>
  )
}
export default Home;

