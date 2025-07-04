import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5 justify-between">
            <div className="flex items-center">
                <span className="font-bold ml-2">Library Management System</span>
            </div>
            <Link className="border p-1 pl-3 pr-3 rounded bg-gray-500 text-white" to="/books">All Books</Link>
            <Link className="border p-1 pl-3 pr-3 rounded bg-gray-500 text-white" to="/create-book">Add Books</Link>
            <Link className="border p-1 pl-3 pr-3 rounded bg-gray-500 text-white" to="/borrow-summary">Borrow Summary</Link>
            <div className="ml-auto">
                {/* <ModeToggle /> */}
            </div>
        </nav>
    );
}