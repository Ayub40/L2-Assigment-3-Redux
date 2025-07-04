import BookCard from "@/module/AllBooks/BookCard";
import { useGetBooksQuery } from "@/redux/api/bookApi";
// import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/types";
import { Link } from "react-router";

export default function AllBooks() {
    const { data, isLoading } = useGetBooksQuery(undefined, {
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
    })
    console.log({ data, isLoading });

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="mx-auto max-w-7xl px-5 mt-20 overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">All Books</h2>
            <Link
                to="/create-book"
                className="bg-blue-600 text-white px-4 py-2 rounded inline-block mb-4"
            >
                + Add Book
            </Link>
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
                        <BookCard key={book.id} book={book} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
