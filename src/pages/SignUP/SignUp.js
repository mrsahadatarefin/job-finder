import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, updateUser} = useContext(AuthContext)
    const handleSignUP = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email =  form.email.value;
        const password = form.password.value;
        form.reset()
        createUser(email,password)
        .then(( result)=>{
            const user = result.user;
            console.log(user)
            const userInfo = {
                displayName:name
 
            }
            updateUser(userInfo)
            .then(()=>{

            })
            .catch(err =>console.log(err))
            
         

        })
        .catch(err =>console.log(err))


        
    }

    return (
        <div className="hero ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-3xl font-bold">Sign Up!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handleSignUP}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" />
              </div>
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
                
              </div>
              <div className="form-control mt-6">
                  <input type="submit"  className="btn btn-primary" value="Sign Up" />
                
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;