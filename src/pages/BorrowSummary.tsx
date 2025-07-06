import BorrowBookCard from "@/module/BorrowBook/BorrowBookCard";
import { useGetBorrowSummaryQuery } from "../redux/api/borrowApi";
import type { IBorrow } from "@/types";

const BorrowSummary = () => {
    const { data, isLoading } = useGetBorrowSummaryQuery(undefined, {
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
    });
    console.log({ data, isLoading });

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="max-w-7xl m-auto px-5 mt-20 overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">Borrow Summary</h2>
            <table className="w-full border">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-2 w-[20%] border-r border-gray-300">Title</th>
                        <th className="p-2 w-[20%] border-r border-gray-300">ISBN</th>
                        <th className="p-2 w-[20%] border-r border-gray-300">Total Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.map((borrow: IBorrow, index: number) => (
                        <BorrowBookCard key={index} borrow={borrow} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BorrowSummary;



