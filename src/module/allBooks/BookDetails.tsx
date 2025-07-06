import { useGetBookByIdQuery } from "@/redux/api/bookApi";
import { useParams } from "react-router";

export default function BookDetails() {
    const { id } = useParams();
    const { data, isLoading } = useGetBookByIdQuery(id!, {
        refetchOnMountOrArgChange: true,
    });

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 shadow border rounded-md">
            <h2 className="text-2xl font-bold mb-4">{data?.data?.title}</h2>
            <p><strong>Author:</strong> {data?.data?.author}</p>
            <p><strong>Genre:</strong> {data?.data?.genre}</p>
            <p><strong>ISBN:</strong> {data?.data?.isbn}</p>
            <p><strong>Copies:</strong> {data?.data?.copies}</p>
            <p><strong>Available:</strong> {data?.data?.available ? "Available" : "Unavailable "}</p>
            <p><strong>Description:</strong> {data?.data?.description}</p>
        </div>
    );
}