import { organizedDate } from '@/utils/organizedDate';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({blog}) => {
  const {title,img,description , category,mainconten,createdAt,_id} = blog;
  console.log(img);
    return (
  <div class="blog-card transition duration-300 ease-in-out    bg-white border-2 border-pink-600 text-center cursor-pointer hover:shadow-md">
    <div class="card-img relative text-center bg-pink-600">
      <img src= {img}  class="transition duration-300 ease-in-out max-h-48 w-full border-b-4 border-pink-600" alt={title.slice(0,2)}/>
      <h1 class="absolute bottom-0 w-full text-white font-slabo capitalize bg-gray-400 py-1 "> {title} </h1>
    </div>
    <div class="card-details mt-8 font-roboto text-gray-700">
      <span><i class="fa fa-calendar"></i>{
        organizedDate(createdAt)
      }</span>
      
    </div>
    <p className='text-black'>{category}</p>
    <div class="card-text py-4 px-2 font-roboto leading-6 text-black">
      <p className='text-black '> {description}</p>
    </div>
    <Link href={`/blog/${_id}`} class="read-more transition duration-300 ease-in-out inline-block uppercase bg-pink-600 text-white py-2 px-6 mb-4 font-oswald hover:bg-pink-700 rounded-md">Read More</Link>
  </div>   
    );
};

export default Card;