import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const {login}= useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname ||'/'
    
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()

        login(email,password)
        .then((result)=>{
            const user = result.user;
            console.log(user)
            navigate(from,{replace:true});
        })
        .catch((error)=>console.log(error))

    }
    return (
        <div className="hero ">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-3xl font-bold">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
            <input type="submit"  className="btn btn-primary" value="Login" />
          
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;