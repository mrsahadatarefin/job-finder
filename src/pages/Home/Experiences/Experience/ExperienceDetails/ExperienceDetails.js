import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ExperienceDetails = () => {
    const ExperienceDetails = useLoaderData()
    const {name,company,img,description,job,job_Requirements,location,_id}=ExperienceDetails
    return (
        
<div className="card  bg-base-100 shadow-xl m-10">
  <div className="card-body">
    <h2 className="card-title"> <span className='font-bold'> Job Name </span>{name}</h2>
    <p className=''> <span className=' font-bold '>company Name :</span>{company}</p>
    <p className=''> <span className=' font-bold '>Job Type :</span>{job}</p>
    <p className=''> <span className=' font-bold '>Requirements :</span>{job_Requirements}</p>
    <p className=''> <span className=' font-bold '>location :</span>{location}</p>
    <p className=''> <span className=' font-bold '>description :</span>{description}</p>
    <div>
    <button className='btn btn-wide font-bold'><Link to={`/fresher/apply/${_id}`}>Apply</Link></button>
    </div>
  </div> 
  <figure><img src={img} alt="Shoes" /></figure>
</div>
    );
};

export default ExperienceDetails;