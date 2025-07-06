import { baseApi } from "./baseApi";

export const bookApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            // query: () => "/books",
            query: ({ filter = "", sortBy = "createdAt", sort = "dsc", limit = 10, page = 1 }) =>
                `/books?filter=${filter}&sortBy=${sortBy}&sort=${sort}&limit=${limit}&page=${page}`,
            providesTags: ["Book"], 
        }),
        getBookById: builder.query({
            query: (id) => `/books/${id}`,
        }),
        createBook: builder.mutation({
            query: (data) => ({
                url: "/books",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Book"],
        }),
        updateBook: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `/books/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Book"],
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Book"],
        }),
    }),
});

export const {
    useGetBooksQuery,
    useGetBookByIdQuery,
    useCreateBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
} = bookApi;
