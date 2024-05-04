import React, { useState } from 'react';
import { useCreateCommentMutation, useDeleteCommentMutation, useGetCommentQuery } from '../features/blogApi';

const Comments = ({postId}) => {
    const [commentContent, setCommentContent] = useState('');
    const [createComment,{data,isLoading,isError}]=useCreateCommentMutation();
    const [deleteComment,{isError:error}] =    useDeleteCommentMutation()
    const handleCommentSubmit = async () => {
       
        let c = { content:commentContent};
       
        createComment({postId,c})
      };
      const {data:comments} =  useGetCommentQuery(postId);
     const handleDeleteComment = async (id)=>{
           deleteComment(id)
     }
    return (
        <div>
             <div className="max-w-xl mx-auto mt-8 p-4 border border-gray-300 rounded-lg">
       

      <h3 className="text-xl font-bold mb-4">Comments</h3>
      <ul className="space-y-4">
        {comments?.map(comment => (
          <li key={comment._id} className="flex justify-between border-b border-gray-300 pb-2">
            <p className="text-gray-200">
              <span className="font-semibold">{comment?.author?.name}: </span>
              {comment?.content}
            </p>
            <button className='bg-red-600 p-2 border rounded-md'
            onClick={()=>handleDeleteComment(comment?._id)}
            >Delete</button>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <textarea
          className="w-full border border-gray-300 rounded-md p-2"
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