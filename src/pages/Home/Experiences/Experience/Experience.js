import React from 'react';
import { Link } from 'react-router-dom';

const Experience = ( {experience}) => {
    const {name,company,img,description,job,job_Requirements,location,_id}= experience
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
          {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          {/* <p>{description.slice(0,45)}.....</p> */}
          <p  > <span className='font-bold'> company Name:</span> {company}</p>
          <p  > <span className='font-bold' > JOb Type:</span> {job}</p>
          <div className="card-actions justify-end">
            <div className="btn btn-outline btn-success"><Link to={`/experience/${_id}`}>details</Link> </div> 
            <div className="btn btn-outline">Apply now!</div>
          </div>
        </div>
      </div>
    );
};

export default Experience;