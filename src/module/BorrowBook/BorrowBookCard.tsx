import type { IBorrow } from "@/types";


interface IProps {
    borrow: IBorrow;
}

export default function BorrowBookCard({ borrow }: IProps) {

    return (
        <tr className="text-center border-t">
            <td className="p-2 border w-[20%]">{borrow.book.title}</td>
            <td className="border w-[20%]">{borrow.book.isbn}</td>
            <td className="border w-[20%]">{borrow.totalQuantity}</td>
        </tr>
    );
}

