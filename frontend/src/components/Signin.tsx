import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import blogs from './Blogs';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSign = async (e:any) => {
    e.preventDefault(); // Prevent default form submission

    if (!email || !password) {
      toast.error('Please fill all fields', { autoClose: 4000 });
      return;
    }

    try {
      const res = await axios.post('https://backend.shubhankmishra1011-b68.workers.dev/api/v1/user/signin', {
        email,
        password,
      });

      const jwt = res.data;
      localStorage.setItem('token', jwt);

      navigate('/blogs');
    } catch (e) {
      toast.error('An error occurred during sign in. Please try again.', { autoClose: 4000 });
    }
  };

  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center'>
        <div className='flex-col items-center'>
          <form onSubmit={onSign} className='flex flex-col'>
            <div className='flex flex-col mb-4'>
              <label className='mb-2' htmlFor='email'>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='border p-2'
                type='email'
                id='email'
                name='email'
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label className='mb-2' htmlFor='password'>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='border p-2'
                type='password'
                id='password'
                name='password'
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded font-bold w-full"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signin;
