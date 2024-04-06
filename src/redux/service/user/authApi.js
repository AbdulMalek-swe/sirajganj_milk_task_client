import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { loggedIn } from "./authSlice";

export const authApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/user/",
  }),
 
  endpoints: (builder) => ({
    studentRegister: builder.mutation({
      query: (data) => ({
        url: `register`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          console.log(arg)
          const { data } = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: data,
              user: data?.user,
            })
          );

          dispatch(
            loggedIn({
              token: data?.accessToken,
              user: data?.user,
            })
          );
        } catch (error) {
          console.error("Error in studentRegister:", error);
          throw error; // Rethrow the error to notify callers
        }
      },
    }),
    signIn: builder.mutation({
      query: (data) => ({
        url: `login`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: data?.accessToken,
              user: data?.user,
            })
          );

          dispatch(
            loggedIn({
              token: data?.accessToken,
              user: data?.user,
            })
          );
        } catch (error) {
          console.error("Error in signIn:", error);
          throw error; // Rethrow the error to notify callers
        }
      },
    }),
  }),
});

export const { useSignInMutation, useStudentRegisterMutation } = authApi;
