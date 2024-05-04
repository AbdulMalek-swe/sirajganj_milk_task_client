 
import { apiSlice } from "@/redux/features/api/apiSlice";
import { setCookie } from "@/utils/cookies";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (data) => ({
        url:  "user/login",
        method: 'POST',
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
     
        try {
          const { data } = await queryFulfilled;
          console.log(data,"come data")
          const { accessToken, refreshToken } = data || {};
          console.log(accessToken);
          setCookie('access', accessToken, { expires: new Date(Date.now() + 1000 * 60 * 60*4) }); // 15 minutes in milliseconds
           setCookie('refresh', refreshToken, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24) }); // 24 hours in milliseconds

        } catch (error) {}
      }
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url:  "user/signin",
        method: 'POST',
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
     
        try {
          const { data } = await queryFulfilled;
          console.log(data,"come data")
          const { accessToken, refreshToken } = data || {};
          console.log(accessToken);
          setCookie('access', accessToken, { expires: new Date(Date.now() + 1000 * 60 * 60*4) }); // 15 minutes in milliseconds
           setCookie('refresh', refreshToken, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24) }); // 24 hours in milliseconds

        } catch (error) {}
      }
    }),
     
  })
});

export const { useSignInMutation,  useSignUpMutation } = authApiSlice;
