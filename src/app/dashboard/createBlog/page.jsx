"use client"
import { useCreatePostMutation  } from '@/redux/service/blog/useApi';
// components/PostForm.js
import { useState } from 'react';
 
// import { addPost } from '../redux/postsSlice';

const PostForm = () => {
    const [createPost, { isLoading, isError }] = useCreatePostMutation();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    mainContent: '',
    img:''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    createPost(formData).unwrap().then((data) => {
        console.log('Post created:', data);
      
      }).catch((error) => {
        console.error('Error creating post:', error);
         
      });
    setFormData({
        img:'',
      title: '',
      description: '',
      category: '',
      mainContent: '',
    });
  };
  
 
  return (
    <div className="flex flex-col justify-center my-5 items-center">
      <h2 className="text-2xl font-bold mb-4">Create Post</h2>
      <form onSubmit={handleSubmit} className="max-w-lg w-full text-black">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
          required
        />
        <input
          type="text"
          name="img"
          value={formData.img}
          onChange={handleChange}
          placeholder="Image link"
          className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
          required
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
          required
        />
        <select
  name="category"
  value={formData.category}
  onChange={handleChange}
  className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
  required
>
  <option value="">Select Category</option>
  <option value="technology">Technology</option>
  <option value="travel">Travel</option>
  <option value="lifestyle">Lifestyle</option>
</select>

        <textarea
          name="mainContent"
          value={formData.mainContent}
          onChange={handleChange}
          placeholder="Main Content"
          className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
