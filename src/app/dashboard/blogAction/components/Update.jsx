 
import React, { useEffect, useState } from 'react';

const Update = ({isOpen,onClose,id}) => {
    
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        mainContent: '',
      });
      useEffect(() => {
        if (data) {
          setFormData({
            title: data.result.title || '',
            description: data.result.description || '',
            mainContent: data.result.mainContent || '',
          });
        }
      }, [data]);
      const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
     
      const handleSubmit = e => {
        e.preventDefault();
        console.log(formData,id)
         
      };
     
      
      
    return (
        <>
        {/* Background Overlay */}
        {isOpen && (
          <div className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-50">
            {/* Modal Container */}
            <div className="flex items-center justify-center min-h-screen">
              {/* Modal Content */}
              <div className="bg-white w-full md:w-1/2 mx-4 rounded-lg p-4 md:p-8 text-gray-800">
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b pb-4">
                  <h2 className="text-lg font-semibold">Update blog</h2>
                  <button className="text-gray-500 hover:text-gray-600 focus:outline-none" onClick={onClose}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                {/* Modal Body */}
                <div className="mt-4">
                <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
      Title:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="title"
      type="text"
      placeholder="Enter title"
      name="title"
      value={formData.title}
      onChange={handleChange}
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
      Description:
    </label>
    <textarea
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="description"
      placeholder="Enter description"
      name="description"
      value={formData.description}
      onChange={handleChange}
    ></textarea>
  </div>
  
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mainContent">
      Main Content:
    </label>
    <textarea
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="mainContent"
      placeholder="Enter main content"
      name="mainContent"
      value={formData.mainContent}
      onChange={handleChange}
    ></textarea>
  </div>
  <div className="flex items-center justify-between">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Save
    </button>
  </div>
</form>

                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
};

export default Update;