"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import AuthField from '../components/AuthField';
import { data as authDataFieldJson } from '../components/authFieldData';
import axios from 'axios';
import { useSignInMutation } from '@/redux/service/user/authApi';
const Home = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [signin ,{isError,error,data}] =  useSignInMutation();
  console.log(error);
  console.log(data)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    signin(formData)
     
  };

    return (
        <div className="container mx-auto mt-20">
      <form   className="max-w-md mx-auto" onSubmit={ handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {
            authDataFieldJson.filter(authField => authField.name === 'email' || authField.name === 'password').map((authField,index)=><AuthField authField={authField} key={index} handleChange={handleChange}  />)
        }
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
          <div>
            <span>have no account? </span>
            <Link href="/auth/signup" className='hover:underline hover:text-blue-200'> signup</Link>
          </div>
        </div>
      </form>
    </div>
    );
};

export default Home;