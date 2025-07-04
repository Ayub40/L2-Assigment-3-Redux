// import BookCard from "@/module/allBooks/BookCard";
import { useGetBooksQuery } from "@/redux/api/baseApi";
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
        <div className="mx-auto max-w-7xl px-5 mt-20">
            {/* =========================================== */}
            <h2 className="text-xl font-bold mb-4">All Books</h2>
            <Link to="/create-book" className="bg-blue-600 text-white px-4 py-2 rounded">+ Add Book</Link>
            <table className="w-full mt-4 border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2">Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>ISBN</th>
                        <th>Copies</th>
                        <th>Available</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.map((book: IBook) => (
                        <tr key={book.id} className="text-center border-t">
                            <td className="p-2 border">{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.genre}</td>
                            <td>{book.isbn}</td>
                            <td>{book.copies}</td>
                            <td>{book.available ? "✅" : "❌"}</td>
                            <td className="flex justify-center gap-2 py-2">
                                <Link to={`/books/${book.id}`} className="text-blue-500">View</Link>
                                <Link to={`/edit-book/${book.id}`} className="text-yellow-500">Edit</Link>
                                <Link to={`/borrow/${book.id}`} className="text-green-600">Borrow</Link>
                                <button className="text-red-500">Delete</button>

                            </td>
                        </tr>
                    ))}




                    {/* <div className="space-y-5 mt-5">
                        {data?.data?.map((book: IBook) => (
                            <BookCard book={book} key={book.id} />
                        ))}
                    </div> */}
                </tbody>
            </table>
            {/* =========================================== */}

        </div>
    );
}

// {/* <div className="space-y-5 mt-5">
//     {data?.data?.map((book: IBook) => (
//         <BookCard book={book} key={book.id} />
//     ))}
//     {/* {!isLoading && data?.books?.map((book: IBook) => (
//                     <BookCard book={book} key={book.id} />
//                 ))} */}
// </div> */}
//
//
//  {/* <button onClick={() => deleteBook(book._id)} className="text-red-500">Delete</button> */}