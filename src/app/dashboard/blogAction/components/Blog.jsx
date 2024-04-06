import { useDeleteBlogByIdMutation, useGetPostQuery } from '@/redux/service/blog/useApi';
import { organizedDate } from '@/utils/organizedDate';
import Link from 'next/link';
import React, { useState } from 'react';
import Update from './Update';

const Card = ({ blog, handleModalOpen }) => {
  const { title, img, description, category, maincontent, createdAt, _id } = blog;
  const [    deleteBlogById ] = useDeleteBlogByIdMutation()
  const handleDelete = async(id)=>{
    try {
        await   deleteBlogById({id})
        // Redirect or perform any other action after successful deletion
      } catch (error) {
        console.error('Failed to delete blog:', error);
      }
  }
  // open modal for update 
  
  return (
    <tr className="transition duration-300 ease-in-out bg-white border-2 border-pink-600 text-center cursor-pointer hover:shadow-md">
      <td className="relative text-center  ">
       
        <h1 className="v text-black "> {title}</h1>
      </td>
      <td className="font-roboto text-gray-700">
        <span><i className="fa fa-calendar"></i>{organizedDate(createdAt)}</span>
      </td>
      <td className="py-4 px-2 font-roboto leading-6 text-black">
        <p>{description}</p>
      </td>
      <td>

        <button  onClick={()=>handleDelete(_id) } className="read-more transition duration-300 ease-in-out inline-block uppercase bg-pink-600 text-white py-2 px-6 mb-4 font-oswald hover:bg-pink-700 rounded-md">delete</button>
        <button  onClick={()=>handleModalOpen(_id) } className="read-more transition duration-300 ease-in-out inline-block uppercase bg-pink-600 text-white py-2 px-6 mb-4 font-oswald hover:bg-pink-700 rounded-md">Edit</button>
      </td>
    </tr>
  );
};

const Table = ( ) => {
    const {data,isLoading,error}  = useGetPostQuery();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id,setId] = useState("")
    if(isLoading){
        return <div>loading...</div>
    }
    if(error){
      return <>loading...</>
    }
    const handleModalOpen =(id)=>{
      setIsModalOpen(true);
      setId(id)
    }
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { data?.result && data?.result?.map(blog => (
          <Card key={blog._id} blog={blog} handleModalOpen={handleModalOpen}/>
        ))}
        <Update  isOpen={isModalOpen} onClose={closeModal} id={id}/>
      </tbody>
    </table>
  );
};

export default Table;
