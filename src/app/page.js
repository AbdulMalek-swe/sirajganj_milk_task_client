"use client"

import Card from "@/components/Card/Card"
 
import { useState } from "react";
import { useGetBlogQuery } from "./blog/features/blogApi";
import Pagination from "@/components/Pagination/Pagination";

export default function Home() {
  const [search,setSearch] = useState("")
  const [limit, setLimit] = useState(5)
  const [page, setPage] = useState(1)
  const {data,isLoading}=useGetBlogQuery({text:`${search}`,page:page,limit:limit});
  const handleChange = (e) => {
    if(e=="..."){
      setPage(1)
    }
    else if(e>=data?.totalPage){
      setPage(data?.totalPage)
    }else if(e<1){
      setPage(1)
    }
    else{
      setPage(e)
    }
}
  if(isLoading){
    return <div>Loading...</div>
  }
  return (
   <>
  <div className="flex justify-center my-5">
  <input className="py-2 px-3 w-1/2 border rounded-md text-black outline-none shadow-lg" placeholder="search your blog using title name" onChange={e=>setSearch(e.target.value)}/>
  </div>
     <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    {   data?.result.map((blog,index)=>  <Card blog={blog} key={index}/>)}
   
     </div>
     <div className="my-5"> <Pagination totalPage={data?.totalPage} page={page} limit={limit} siblings={1} handleChange={handleChange} /></div>
   </>
  )
}
