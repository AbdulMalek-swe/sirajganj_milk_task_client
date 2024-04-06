// components/Signup.js
"use client"
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthField from '../components/AuthField';
// import { signup } from '../slices/authSlice';
import {data as authDataFieldJson} from '../components/authFieldData'
import { useStudentRegisterMutation } from '@/redux/service/user/authApi';
const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [studentRegister,{isError,error,data}] =  useStudentRegisterMutation();
  console.log(error);
  console.log(data)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    studentRegister(formData)
     
  };

  return (
    <div className="container mx-auto mt-20">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {
            authDataFieldJson.map((authField,index)=><AuthField authField={authField} key={index} handleChange={handleChange}  />)
        }
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
          <div>
            <span>have  account? </span>
            <Link href="/auth/signin" className='hover:underline hover:text-blue-200'> signin</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
