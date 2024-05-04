"use client"
  
import React from 'react';
import { useGetSingleBlogQuery } from '../features/blogApi';
import Image from 'next/image';
import Comments from '../component/Comments';
 
const Page = ({params}) => {
 
   
  let id = params?.slug;
  
   const {data,isLoading} = useGetSingleBlogQuery(id);
   console.log(data);
   if(isLoading){
    return <div>loading...</div>
   }
    return (
        <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-200">{data?.result?.title}</h2>
            <Image width={1000} height={1000} src={data?.result?.img} alt={data?.result?.title} className="rounded-lg mb-4" />
   
<div dangerouslySetInnerHTML={{ __html: data?.result?.description }}></div>
       <Comments postId={id}/>
        </div>
    );
};

export default Page; 