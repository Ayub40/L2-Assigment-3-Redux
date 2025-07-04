import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
  tagTypes: ["Book", "Borrow"],
  endpoints: () => ({}),
});



// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const baseApi = createApi({
//     reducerPath: "baseApi",
//     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
//     tagTypes: ["Book", "Borrow"],
//     endpoints: (builder) => ({
//         getBooks: builder.query({
//             query: () => "/books",
//             providesTags: ["Book"]
//         }),
//         borrowBook: builder.mutation({
//             query: (borrowBook) => ({
//                 url: "/borrow",
//                 method: "POST",
//                 body: borrowBook,
//             }),

//         })
       
//     }),

// });

// export const { useGetBooksQuery } = baseApi;