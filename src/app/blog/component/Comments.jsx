import React, { useState } from 'react';
import { useCreateCommentMutation, useDeleteCommentMutation, useGetCommentQuery, useUpdateCommentMutation } from '../features/blogApi';

const Comments = ({postId}) => {
    const [commentContent, setCommentContent] = useState('');
    const [open,setOpen] = useState(false);
    const [createComment,{data,isLoading,isError}]=useCreateCommentMutation();
    const {data:comments} =  useGetCommentQuery(postId);
    const [deleteComment,{isError:error}] =    useDeleteCommentMutation()
    const [singleComment,setSingleComment] = useState({})
    const handleCommentSubmit = async () => {
               let c = { content:commentContent};
        createComment({postId,c})
      };
     
     const handleDeleteComment = async (id)=>{
           deleteComment(id)
     }
     const handleUpdateComment = async(id)=>{
      setOpen(true)
       setSingleComment(comments.find((item)=>item?._id==id))
     }
     console.log(singleComment);
    return (
        <div>
           
           { open && <Modal singleComment={singleComment} setOpen={setOpen}/>}
          
             <div className="max-w-xl mx-auto mt-8 p-4 border border-gray-300 rounded-lg">
       

      <h3 className="text-xl font-bold mb-4">Comments</h3>
      <ul className="space-y-4">
        {comments?.map(comment => (
          <li key={comment._id} className="flex justify-between border-b border-gray-300 pb-2">
            <p className="text-gray-200">
              <span className="font-semibold">{comment?.author?.name}: </span>
              {comment?.content}
            </p>
            <div >
            <button className='bg-red-600 p-2 border rounded-md'
            onClick={()=>handleDeleteComment(comment?._id)}
            >Delete</button>
            <button className='bg-red-600 mx-2 p-2 border rounded-md'
            onClick={()=>handleUpdateComment(comment?._id)}
            >Update</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <textarea
          className="w-full border text-black border-gray-300 rounded-md p-2"
          rows="4"
          placeholder="Add your comment..."
          value={commentContent}
          onChange={e => setCommentContent(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600"
          onClick={handleCommentSubmit}
        >
          Add Comment
        </button>
      </div>
    </div>
        </div>
    );
};

export default Comments;  

const Modal = ({singleComment,setOpen})=>{
  const [upContent,setUpContent] = useState('')
 const [updateComment,{isLoading,isError}] =  useUpdateCommentMutation()
  const handleUpdateSubmit = async()=>{
    setOpen(false)
    let content = {content:upContent}
    updateComment({id:singleComment?._id,content})
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
          defaultValue={singleComment?.content}
          onChange={e => setUpContent(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600"
          onClick={handleUpdateSubmit}
        >
         update Comment
        </button>
      </div>
              </div>
              </div>
              </div>
            
  </>
}