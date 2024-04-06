import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const blogApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/blog/",
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
  }),
});

export const { useDeleteBlogByIdMutation , useGetPostQuery ,useGetBlogByIdQuery,useCreatePostMutation } = blogApi;