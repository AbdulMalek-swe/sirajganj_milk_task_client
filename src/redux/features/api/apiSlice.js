import { getCookie, setCookie } from "@/utils/cookies";
import { refreshAccessToken } from "@/utils/refreshToken";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";

const mutex = new Mutex();

// Create a function to retrieve the access token synchronously
const getAccessToken = () => getCookie('access');
 
const baseQuery = fetchBaseQuery({
  baseUrl: `http://localhost:5000/`,
  prepareHeaders: (headers, { getState }) => {
    // Retrieve the access token synchronously
    const token = getAccessToken();
 
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  }
});
 

const baseQueryWithReauth  = async (
  args,
  api,
  extraOptions
) => {
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);
 
  if (result.error && result.error.status === 401) {
    // Try to get a new token
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshToken = getCookie('refresh');
        if (refreshToken) {
          const refreshResult  = await refreshAccessToken(refreshToken);
          if (refreshResult.success) {
            setCookie('access', refreshResult?.accessToken, {
              expires: new Date(Date.now() + 1000 * 60 * 15)
            }); // 15 minutes in milliseconds
            result = await baseQuery(args, api, extraOptions);
          } else {
            console.log('Error refreshing access token:', refreshResult.error);
          }
        }
      } finally {
        release();
      }
    } else {
      // Wait until the mutex is released
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

  export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery:  baseQueryWithReauth,
    endpoints: (build) => ({})
  });