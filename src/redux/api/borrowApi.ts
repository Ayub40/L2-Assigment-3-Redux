import { baseApi } from "./baseApi";

export const borrowApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBorrowSummary: builder.query({
            query: () => "/borrow",
            providesTags: ["Borrow"],
        }),
        borrowBook: builder.mutation({
            query: (body) => ({
                url: "/borrow",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Book", "Borrow"],
        }),

    }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApi;
