import type { IBook } from "@/types";
import { Book, Edit, Trash, View } from "lucide-react";
import { Link } from "react-router";

interface IProps {
    book: IBook;
}

export default function BookCard({ book }: IProps) {
    console.log(book);

    return (
        <tr className="text-center border-t">
            <td className="p-2 border w-[20%]">{book.title}</td>
            <td className="border w-[15%]">{book.author}</td>
            <td className="border w-[10%]">{book.genre}</td>
            <td className="border w-[15%]">{book.isbn}</td>
            <td className="border w-[10%]">{book.copies}</td>
            <td className="border w-[10%]">{book.available ? "✅" : "❌"}</td>
            <td className="border w-[20%]">
                <div className="flex justify-center gap-3 py-2 flex-wrap">
                    <Link to={`/books/${book.id}`} className="text-blue-500">
                        <View />
                    </Link>
                    <Link to={`/edit-book/${book.id}`} className="text-yellow-500">
                        <Edit />
                    </Link>
                    <Link to={`/borrow/${book.id}`} className="text-green-600">
                        {/* <BowArrow /> */}
                        <Book />
                    </Link>
                    <button className="text-red-500"><Trash /></button>
                </div>
            </td>
        </tr>
    );
}