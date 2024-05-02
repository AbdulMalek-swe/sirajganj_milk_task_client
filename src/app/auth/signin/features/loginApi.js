import { apiSlice } from "@/redux/features/api/apiSlice"

 
const extendedApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    example: build.query({
      query: () => 'test',
    }),
  }),
  overrideExisting: false,
})

export const { useExampleQuery } = extendedApi