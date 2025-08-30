import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useDeleteBookMutation } from "@/redux/api/bookApi";
import type { IBook } from "@/types";
import { Book, Edit, Trash, View } from "lucide-react";
import { Link } from "react-router";
import toast from "react-hot-toast"

interface IProps {
    book: IBook;
}

export default function BookCard({ book }: IProps) {
    const [deleteBook, { isLoading }] = useDeleteBookMutation();
    console.log(book);

    const handleDelete = async () => {
        const confirm = window.confirm(`Are you sure to delete "${book.title}"?`);
        if (!confirm) return;

        try {
            await deleteBook(book._id).unwrap();
            toast.success("Book deleted successfully");
        } catch (err: any) {
            toast.error(err?.data?.message || "Failed to delete");
        }
    };

    return (
        <tr className="text-center border-t">
            <td className="p-2 border w-[20%]">{book.title}</td>
            <td className="border w-[15%]">{book.author}</td>
            <td className="border w-[10%]">{book.genre}</td>
            <td className="border w-[15%]">{book.isbn}</td>
            <td className="border w-[10%]">{book.copies}</td>
            <td className="border w-[10%]">{book.available ? "Available" : "Unavailable "}</td>
            <td className="border w-[20%]">
                <TooltipProvider>
                    <div className="flex justify-center gap-3 py-2 flex-wrap">

                        {/* View */}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link to={`/books/${book._id}`} className="text-blue-500">
                                    <View />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>View Book</p>
                            </TooltipContent>
                        </Tooltip>

                        {/* Edit */}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link to={`/edit-book/${book._id}`} className="text-yellow-500">
                                    <Edit />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Edit Book</p>
                            </TooltipContent>
                        </Tooltip>

                        {/* Borrow */}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link to={`/borrow/${book._id}`} className="text-green-600">
                                    <Book />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Borrow Book</p>
                            </TooltipContent>
                        </Tooltip>

                        {/* Delete */}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                {/* <button className="text-red-500" onClick={(handleDelete) => alert(`Delete ${book.title}`)}> */}
                                <button className="text-red-500" onClick={handleDelete} disabled={isLoading}>
                                    <Trash />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Delete Book</p>
                            </TooltipContent>
                        </Tooltip>

                    </div>
                </TooltipProvider>
            </td>
        </tr>
    );
}