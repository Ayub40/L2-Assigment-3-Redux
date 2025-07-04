import { baseApi } from "./baseApi";

export const borrowApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBorrowSummary: builder.query({
            query: () => "/borrow",
            providesTags: ["Borrow"],
        }),
        borrowBook: builder.mutation({
            query: (data) => ({
                url: "/borrow",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Book", "Borrow"],
        }),

    }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApi;
