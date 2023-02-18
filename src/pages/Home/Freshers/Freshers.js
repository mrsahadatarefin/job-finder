import React, { useEffect, useState } from 'react';
import Fresher from './Fresher';

const Freshers = () => {
 const [freshersUser,setFreshersUser]=useState([])
 useEffect(()=>{
    fetch('https://job-protals-server.vercel.app/fresher')
    .then(res => res.json())
    .then(data =>   setFreshersUser(data) )
   
 },[])

    return (

        <div className='mt-20 '>
            <h2 className='pt-8 text-green-600 text-center text-4xl font-bold'> Fresher Jobs</h2>
            <p className='text-center p-2'>Find here your job  </p>
      <div className='gap-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {freshersUser.map((fresherJob) => (
             <Fresher
             key={fresherJob._id}
             fresherJob={fresherJob}
             
             ></Fresher>
            ))}
      </div>
        
        </div>
    );
};

export default Freshers;