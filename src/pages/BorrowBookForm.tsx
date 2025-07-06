import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useBorrowBookMutation } from "../redux/api/borrowApi";

const BorrowForm = () => {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const [borrowBook] = useBorrowBookMutation();
    const [form, setForm] = useState({ quantity: 1, dueDate: "" });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await borrowBook({ book: bookId, ...form });
        navigate("/borrow-summary");
    };

    return (
        <div className="max-w-7xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold">Borrow Book</h2>
                <input type="number" min={1} value={form.quantity} onChange={(e) => setForm({ ...form, quantity: +e.target.value })} className="border w-full p-2" placeholder="Quantity" />
                <input type="date" value={form.dueDate} onChange={(e) => setForm({ ...form, dueDate: e.target.value })} className="border w-full p-2" required />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Borrow</button>
            </form>
        </div>
    );
};

export default BorrowForm;
