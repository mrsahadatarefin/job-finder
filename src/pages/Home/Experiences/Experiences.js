import React, { useEffect, useState } from 'react';
import Experience from './Experience/Experience';

const Experiences = () => {
    const [ExperienceJOb,setExperienceJob]= useState([])
    useEffect(()=>{
        fetch('https://job-protals-server.vercel.app/experience')
        .then( res => res.json())
        .then(data =>setExperienceJob(data))
    },[])
    
    return (
        <div className='mt-20 '>
            <h2 className='pt-8 text-green-600 text-center text-4xl font-bold'> Experience Jobs</h2>
            <p className='text-center p-2'>Find here your job  </p>
      <div className='gap-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {ExperienceJOb.map((experience) => (
           
           <Experience
           key={experience._id}
             experience={experience}
           
           ></Experience>
             
             
             
            ))}
      </div>
        
        </div>
    );
};

export default Experiences;