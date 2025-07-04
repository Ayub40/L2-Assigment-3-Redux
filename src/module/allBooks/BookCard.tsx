// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
import type { IBook } from "@/types";
import { Link } from "react-router";
// import { Trash2 } from "lucide-react";

interface IProps {
    book: IBook;
}

export default function BookCard({ book }: IProps) {
    console.log(book);

    return (

        <tr key={book.id} className="text-center border-t">
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.title}</td>
            <td>{book.isbn}</td>
            <td>{book.copies}</td>
            <td>{book.available ? "✅" : "❌"}</td>
            <td className="flex justify-center gap-2 py-2">
                <Link to={`/books/${book.id}`} className="text-blue-500">
                    View
                </Link>
                <Link to={`/edit-book/${book.id}`} className="text-yellow-500">
                    Edit
                </Link>
                <Link to={`/borrow/${book.id}`} className="text-green-600">
                    Borrow
                </Link>
                <button className="text-red-500">
                    Delete
                </button>
                {/* <button onClick={() => deleteBook(book._id)} className="text-red-500">
                    Delete
                </button> */}
            </td>
        </tr>


        // <div className="border px-5 py-5 rounded-md">
        //     <div className="flex justify-between items-center">
        //         <div className="flex gap-2 items-center">
        //             {/* <div className={cn("size-3 rounded-full", {
        //                 "bg-green-500": task.priority === "low",
        //                 "bg-yellow-500": task.priority === "medium",
        //                 "bg-red-500": task.priority === "high",
        //             })}>
        //             </div> */}
        //             <h1 className={cn({ "line-through": book.title })}>{book.author}</h1>
        //         </div>
        //         <div className="flex gap-3 items-center">
        //             {/* <Button onClick={() => dispatch(deleteTask(task.id))} */}
        //             <Button
        //                 variant="link"
        //                 className="p-0 text-red-500">
        //                 <Trash2 />
        //             </Button>
        //             {/* <Checkbox onClick={() => dispatch(toggleCompleteState(task.id))} /> */}
        //         </div>
        //     </div>
        //     {/* <p>Assigned To -{assignedUser ? assignedUser.name : "No One"}</p> */}
        //     <p className="mt-5">{book.description}</p>
        // </div>
    );
}