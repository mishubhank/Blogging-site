import { data } from '@remix-run/router/dist/utils';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {

  // const closeAfter7 = () => toast("Will close after 7s", { autoClose: 7000 });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate =useNavigate ();
  const handleSign = async (e:any) => {
 e.preventDefault()
 try{
 const res=   await axios.post("https://backend.shubhankmishra1011-b68.workers.dev/api/v1/user/signup",{
  name: username,
  email:email,
  password:password
 
 })  

 const jwtt=res.data.jwt
localStorage.setItem("token",jwtt) 
 console.log(jwtt);
 navigate('/new-story');
  console.log("logged in ",res.data)
 

 
}  catch(e){
   if(!username||!password||!email) {
const closeAfter7 = () => toast("fill all fields",  { autoClose: 4000 });
     closeAfter7(); 
   } else {
   const closeAfter7 = () => toast("Failed to signup", { autoClose: 4000 });
       closeAfter7()
  console.log("eerr");} 
}
  } 
  


  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left Section: Signup Form */}
      <div className="flex items-center justify-center h-full bg-yellow-100" >
        <div className="flex flex-col items-center w-full max-w-xs">
          <h2 className="mb-4 text-2xl font-bold">Sign Up</h2>
          <form className="w-full"  onSubmit={handleSign}>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="bg-slate-600  mb-3 px-7 pt-2 pb-2 rounded text-white font-sans w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="bg-slate-600 mb-3 px-7 pt-2 pb-2 rounded text-white font-sans w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="sr-only">Username</label>
              <input 
                
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className="bg-slate-600 mb-3 px-7 pt-2 pb-2 rounded text-white font-sans w-full"
              />
            </div>
            <button
              type="submit"
              className=" bg-blue-500 text-white px-4 py-2 rounded font-bold w-full"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Right Section: Welcome Message */}
      <div className="flex items-center justify-center h-full bg-yellow-200">
        <h2 className="text-3xl font-bold">Welcome to the Page</h2>
      </div>
    </div>
  );
};


// 


export default Signup;
