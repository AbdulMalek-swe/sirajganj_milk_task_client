"use client"

import Card from "@/components/Card/Card"
import { useGetPostQuery } from "@/redux/service/blog/useApi";
import { useState } from "react";

export default function Home() {
  const [search,setSearch] = useState("")
  const {data,isLoading}  = useGetPostQuery();
  const filteredData = search ? 
  data?.result.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  ) : data?.result;
  if(isLoading){
    return <div>loading...</div>
  }
  return (
   <>
  <div className="flex justify-center my-5">
  <input className="py-2 px-3 w-1/2 border rounded-md text-black  " placeholder="search your blog using title name" onChange={e=>setSearch(e.target.value)}/>
  </div>
     <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    {  filteredData.map((blog,index)=>  <Card blog={blog} key={index}/>)}
     </div>
   </>
  )
}
