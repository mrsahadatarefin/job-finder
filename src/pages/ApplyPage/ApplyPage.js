import React from 'react';

const ApplyPage = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-10">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Apply now!</h1>
      <p className="py-6">Find your Dream</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">textarea</span>
          </label>
          <textarea className="textarea textarea-bordered" placeholder="Tell me something your self"></textarea>
          <label className="label">
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default ApplyPage;