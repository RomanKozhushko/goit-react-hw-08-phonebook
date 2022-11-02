
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsAPI = createApi ({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://635fd488ca0fe3c21aa5b744.mockapi.io/' }),
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => 'contacts/',
            providesTags: ['contacts']
        }),
        addContact: builder.mutation({
            query: data => ({
                url: 'contacts/',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['contacts']
        }),
        deleteContact: builder.mutation({
            query: id => ({
            url: `contacts/${id}`,
            method: "DELETE",
            }),
            invalidatesTags: ['contacts']
        })
    })
})
export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsAPI; 