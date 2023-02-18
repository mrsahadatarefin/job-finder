import React, { useEffect, useState } from 'react';
import WorldwideCompany from './WorldwideCompany/WorldwideCompany';

const WorldwideCompanies = () => {
    const [topCompany,setTopCompany]=useState([])
    useEffect(()=>{
  fetch('https://job-protals-server.vercel.app/worldwide')
  .then(res => res.json())
  .then(data => setTopCompany(data))
         
    },[])
    return (
        <div className='mt-20 mb-14 '>
        <h2 className='pt-8 text-green-600 text-center text-4xl font-bold'>  Top It company in Worldwide </h2>
        <p className='text-center p-2'>Find here your job  </p>
  <div className='gap-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
  {topCompany.map((top) => (

    <WorldwideCompany

    key={top._id}

       top={top}
    >

    </WorldwideCompany>
       
       
         
         
         
        ))}
  </div>
    
    </div>
    );
};

export default WorldwideCompanies;