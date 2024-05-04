import { apiSlice } from "@/redux/features/api/apiSlice";

 
export const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlog: builder.query({
      query: ({text,page,limit}) => ({
        url:  `blog/get?text=${text}&page=${page}&limit=${limit}`,
        method: 'GET',
        
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {

        try {
          const { data } = await queryFulfilled;
          
        } catch (error) {}
      }
    }),
    getSingleBlog: builder.query({
      query: (id) => ({
        url:  `blog/get/${id}`,
        method: 'GET',
        
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {

        try {
          const { data } = await queryFulfilled;
          
        } catch (error) {}
      }
    }),
    createBlog: builder.mutation({
      query: (data) => ({
        url:  "blog/create",
        method: 'POST',
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {

        try {
          const { data } = await queryFulfilled;
          
        } catch (error) {}
      }
    }),
    // comments create 
    getComment: builder.query({
      query: (postId) => ({
        url:  `comment/${postId}/comment`,
        method: 'GET',
       
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {

        try {
          const { data } = await queryFulfilled;
          
        } catch (error) {}
      }
    }),
    createComment: builder.mutation({
      query: ({postId,c}) => ({
        url:  `comment/${postId}/comment`,
        method: 'POST',
        body: c
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {

        try {
          const { data } = await queryFulfilled;
          
        } catch (error) {}
      }
    }),
    deleteComment: builder.mutation({
      query: (id) => ({
        url: `/comment/${id}`,
        method: 'DELETE'
      }),
       
      // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
      //   // optimistic update, update when getTask's cache, when task is deleted
      //   console.log(apiSlice.util, 'role');
      //   const patchResult = dispatch(
      //     apiSlice.util.updateQueryData('getRoles', undefined, (draft) => {
      //       return draft.filter((role) => role.uid !== arg);
      //     })
      //   );

      //   try {
      //     await queryFulfilled;
      //   } catch (err) {
      //     patchResult.undo();
      //   }
      // }
    })
  
  })
});

export const { useGetBlogQuery , useGetSingleBlogQuery, useCreateBlogMutation,useCreateCommentMutation ,useGetCommentQuery ,useDeleteCommentMutation } = blogApiSlice;
