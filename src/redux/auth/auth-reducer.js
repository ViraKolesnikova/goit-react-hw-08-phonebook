import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['Auth'],
    }),
    loginUser: builder.mutation({
      query: userData => ({
        url: '/users/login',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Auth'],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',        
      }),
      invalidatesTags: ['Auth'],
    }),

    
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = authApi;