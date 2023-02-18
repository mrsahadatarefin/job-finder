import React, { useEffect, useState } from 'react';
import TopBangladesh from '../TopBangladesh/TopBangladesh';

const BigCompany = () => {
    const [bigCompanyBangladesh,setBigCompanyBangladesh]= useState([])
    useEffect(()=>{
 fetch('https://job-protals-server.vercel.app/companies')
 .then(res => res.json())
 .then(data => setBigCompanyBangladesh(data))

    },[])
    return (
        <div className='mt-20 '>
        <h2 className='pt-8 text-green-600 text-center text-4xl font-bold'> Top IT company in bangladesh </h2>
        <p className='text-center p-2'>Find here your job  </p>
  <div className='gap-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
  {bigCompanyBangladesh.map((bigCompany) => (

    <TopBangladesh
    key={bigCompany._id}
    bigCompany={bigCompany}
    
    
    ></TopBangladesh>
       
     
         
         
         
        ))}
  </div>
    
    </div>
    );
};

export default BigCompany;