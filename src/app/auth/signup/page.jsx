// components/Signup.js
"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AuthField from '../components/AuthField';
import {data as authDataFieldJson} from '../components/authFieldData'
import { useRouter, useSearchParams } from 'next/navigation';
import { useSignUpMutation } from '../signin/features/loginApi';
const Signup = () => {
   const [signUp,{isSuccess}] = useSignUpMutation();
    const queryParams = useSearchParams();
    const callBackUrl = queryParams.get('callbackUrl');
    const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    signUp(formData)
    
  };
  useEffect(() => {
    if (isSuccess) {
      if (callBackUrl) {
        router.push(callBackUrl);
      } else router.push('/');
    }
  }, [callBackUrl, isSuccess, router]);
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
