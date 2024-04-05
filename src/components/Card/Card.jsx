import Link from 'next/link';
import React from 'react';

const Card = () => {
    return (
  <div class="blog-card transition duration-300 ease-in-out    bg-white border-2 border-pink-600 text-center cursor-pointer hover:shadow-md">
    <div class="card-img relative text-center bg-pink-600">
      <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" class="transition duration-300 ease-in-out max-h-48 w-full border-b-4 border-pink-600" alt="New York"/>
      <h1 class="absolute bottom-0 w-full mb-4 text-white font-slabo">New York</h1>
    </div>
    <div class="card-details mt-8 font-roboto text-gray-700">
      <span><i class="fa fa-calendar"></i>AUG 4</span>
      <span><i class="fa fa-heart"></i>102</span>
    </div>
    <div class="card-text py-4 px-2 font-roboto leading-6">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si verbum sequimur, primum longius verbum praepositum quam bonum.</p>
    </div>
    <Link href={"/blog/12"} class="read-more transition duration-300 ease-in-out inline-block uppercase bg-pink-600 text-white py-4 px-6 mb-4 font-oswald hover:bg-pink-700">Read More</Link>
  </div>   
    );
};

export default Card;