import React, { useEffect, useState } from 'react'
import Axios from 'axios';

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
        <h2>Home</h2>
        {workouts && workouts.map((workout)=>(
           <p key={workout._id} className='para'>{workout.title}{workout.reps}{workout.load}</p>
        ))}
    </div>
  )
}
export default Home;

