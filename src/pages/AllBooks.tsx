import BookCard from "@/module/AllBooks/BookCard";
import CreateBookModal from "@/module/CreateBooks/CreateBookModal";
import { useGetBooksQuery } from "@/redux/api/bookApi";
import type { IBook } from "@/types";
import React, { useState } from "react";

export default function AllBooks() {
    // Pagination
    const [page, setPage] = useState(1);
    const limit = 10;

    // const { data, isLoading } = useGetBooksQuery(undefined, {
    const { data, isLoading } = useGetBooksQuery(
        { page, limit },
        {
            refetchOnFocus: true,
            refetchOnMountOrArgChange: true,
            refetchOnReconnect: true,
        })
    console.log({ data, isLoading });

    // Pagination
    const totalPages = data?.meta?.totalPages || 1;


    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="mx-auto max-w-7xl px-5 mt-20 overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">All Books</h2>
            <h2 className="text-white px-4 py-2 rounded inline-block mb-4"><CreateBookModal /></h2>
            {/* <Link
                to="/create-book"
                className="bg-blue-600 text-white px-4 py-2 rounded inline-block mb-4"
            >

                + Add Book
            </Link> */}
            <table className="w-full border table-fixed text-sm">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 w-[20%] border-r border-gray-300">Title</th>
                        <th className="w-[15%] border-r border-gray-300">Author</th>
                        <th className="w-[10%] border-r border-gray-300">Genre</th>
                        <th className="w-[15%] border-r border-gray-300">ISBN</th>
                        <th className="w-[10%] border-r border-gray-300">Copies</th>
                        <th className="w-[10%] border-r border-gray-300">Available</th>
                        <th className="w-[20%] border-r border-gray-300">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.map((book: IBook) => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-6 flex justify-center items-center gap-1 flex-wrap">
                <button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                    &lt; Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((p) => {
                        return (
                            p === 1 || // always show first
                            p === totalPages || // always show last
                            (p >= page - 1 && p <= page + 1) // show current and neighbors
                        );
                    })
                    .map((p, idx, arr) => (
                        <React.Fragment key={p}>
                            {/* Ellipsis before this page */}
                            {idx > 0 && p - arr[idx - 1] > 1 && <span className="px-2">...</span>}

                            <button
                                onClick={() => setPage(p)}
                                className={`px-3 py-1 rounded ${page === p ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                                    }`}
                            >
                                {p}
                            </button>
                        </React.Fragment>
                    ))}

                <button
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                    disabled={page === totalPages}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                    Next &gt;
                </button>
            </div>








            {/* <div className="mt-6 flex justify-center items-center gap-2">
                <button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                    Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setPage(i + 1)}
                        className={`px-3 py-1 rounded ${page === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                    disabled={page === totalPages}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                    Next
                </button>
            </div> */}
        </div>
    );
}
