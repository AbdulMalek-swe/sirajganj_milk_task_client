"use client"
import { useGetBlogByIdQuery } from '@/redux/service/blog/useApi';
import { organizedDate } from '@/utils/organizedDate';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

const Page = ({params}) => {
  console.log( params,"what is problem")
  const state = useSelector(state=>state)
  console.log(state,"state")
  let id = params?.slug;
  const {data,isLoading,error} =  useGetBlogByIdQuery({id})
   if(isLoading){
    return <div>loading...</div>
   }
   if(error){
    return <>data not found</>
   }
   const {title,createdAt,category,description,mainContent,img} = data?.result;
    return (
        <div>
         <div className=" py-12">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold mb-6"> {title} </h1>
    <div className="flex items-center text-gray-600 mb-4">
      <span className="mr-4"><i className="far fa-calendar-alt"></i>{organizedDate(createdAt)}</span>
      <span className="mr-4"><i className="far fa-folder"></i> {category}</span>
    </div>
    <Image  src={img}  width={1000} height={100} alt= {title.slice(0,2)} className="w-full mb-8 rounded-lg"/>
    <div className="leading-7 text-gray-800">
      <h3 className='px-3 bg-blue-300/60 text-white rounded-md w-full h-auto'> Main content:- {mainContent}</h3>
      <p className="mt-4 bg-blue-100 text-black px-3 rounded-md ">Description:- {description}</p>
    
    </div>
  </div>
</div>

        </div>
    );
};

export default Page; 