import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 

export const blogApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/blog/",
    prepareHeaders: (headers) => {
      // Check if localStorage is available
      if (typeof window !== 'undefined') {
        const auth = JSON.parse(localStorage.getItem("auth"));
        const token = auth?.token;
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
      }
      return headers;
    }
  }),
  tagTypes: ['Post', 'User'],
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () =>  'get',
      providesTags: ['Post'], 
    }),
    getBlogById: builder.query({
      query: ({ id }) => `get/${id}`,
      providesTags: (result, error, { id }) => [{ type: 'Post', id }],
    }),
    deleteBlogById: builder.mutation({
      query: ({ id }) => ({
        url: `delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'], // Invalidates the cache for blog posts after deletion
    }),
    createPost: builder.mutation({
      query: (newPost) => ({
        url: 'create',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: builder.mutation({
      query: ({ id, formData }) => ({
        url: `update/${id}`,  
        method: 'PATCH', 
        body: formData,  
      }),
      invalidatesTags: ['Post'], 
    }),
  }),
});

export const { useDeleteBlogByIdMutation , useGetPostQuery ,useGetBlogByIdQuery,useCreatePostMutation,useUpdatePostMutation } = blogApi;