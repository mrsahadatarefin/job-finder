import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Navber = () => {
    const {logOut,user}= useContext(AuthContext)
    const handleLogOut = ()=>{
        logOut() 
        .then(()=>{
           
        }).catch(err=>console.log(err))
    } 
    const menuItems = <React.Fragment>
 <li><Link to='/'>Home</Link></li>
 <li><Link to='/about'> About</Link></li>
 <li><Link to='/Contacts'>Contact Us</Link></li>
 {
    user?.uid? <li><Link><button onClick={handleLogOut}>LogOut</button></Link></li>:
    <>
     <li><Link to='/SignIn'>Sign In</Link></li>
 <li><Link to='/login'>Login</Link></li>
    </>
 }


    </React.Fragment>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <p  className="btn btn-ghost normal-case text-2xl text-green-600 italic m-5 font-bold "> <Link to="/" > JOB FINDER</Link></p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {menuItems}
    </ul>
  </div>
  
</div>
    );
};

export default Navber;