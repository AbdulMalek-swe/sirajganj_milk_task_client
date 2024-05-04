"use client"
  
import React, { useState } from 'react';
import { useDeleteBlogMutation, useGetSingleBlogQuery, useUpdateBlogMutation } from '../features/blogApi';
import Image from 'next/image';
import Comments from '../component/Comments';
 
const Page = ({params}) => {
  const [singleBlog,setSingleBlog] = useState({});
  const [open,setOpen] = useState(false)
 const [deleteBlog,{isLoading:load}]=useDeleteBlogMutation();
   
  let id = params?.slug;
  
   const {data,isLoading} = useGetSingleBlogQuery(id);
   const handleDeleteBlog = async(id)=>{
      deleteBlog(id)
   }
   const handleUpdateSubmit = ()=>{
    setOpen(true)
   }
   if(isLoading){
    return <div>loading...</div>
   }
    return (
        <div className='flex justify-center flex-col items-center'>
          {
            open && <Modal singleBlog={data?.result} setOpen={setOpen}/>
          }
          <div className='flex justify-between w-full'>
          <h2 className="text-3xl font-bold mb-4 text-gray-200">{data?.result?.title}</h2>
          <div>
          <button className='bg-red-600 p-2 border rounded-md'
        onClick={()=>handleDeleteBlog(id)}
            >Delete</button>
            <button  className='bg-red-600 mx-2 p-2 border rounded-md'
           onClick={handleUpdateSubmit}    
            >Update</button>
          </div>
          </div>
             
            <Image width={1000} height={1000} src={data?.result?.img} alt={data?.result?.title} className="rounded-lg mb-4" />
   
<div dangerouslySetInnerHTML={{ __html: data?.result?.description }}></div>
       <Comments postId={id}/>
        </div>
    );
};

export default Page; 

const Modal = ({singleBlog,setOpen})=>{
  const [upContent,setUpContent] = useState('')
 const [updateBlog,{isLoading,isError}] =   useUpdateBlogMutation()
  const handleUpdateSubmit = async()=>{
    setOpen(false)
    let content = {description:upContent}
    updateBlog({id:singleBlog?._id,content})
  }
  return <>
       <div className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-50"> 
            {/* Modal Container */}
            <div className="flex items-center justify-center min-h-screen">
              {/* Modal Content */}
              <div className="relative bg-white w-full md:w-1/2 mx-4 rounded-lg p-4 md:p-8 text-gray-800">
                <button className='top-0 left-1/2 absolute text-red-700 border rounded-sm p-2' onClick={()=>setOpen(false)}>Close</button>
              <div className="mt-4">
        <textarea
          className="w-full border text-black border-gray-300 rounded-md p-2"
          rows="4"
          placeholder="Add your comment..."
          defaultValue={singleBlog?.description}
          onChange={e => setUpContent(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600"
          onClick={handleUpdateSubmit}
        >
         update  Blog
        </button>
      </div>
              </div>
              </div>
              </div>
            
  </>
}