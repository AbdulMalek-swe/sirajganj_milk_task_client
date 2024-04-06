"use client"
import Card from '@/components/Card/Card';
import { useGetPostQuery } from '@/redux/service/blog/useApi';
import React from 'react';

const Home = ({params}) => {
   const {data,isLoading }= useGetPostQuery();
   if(isLoading){
    return <div>loading ...</div>
   }
    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {  data?.result.filter(item=>item.category===params.slug).map((blog,index)=>  <Card blog={blog} key={index}/>)}
         </div>
    );
};

export default Home; 