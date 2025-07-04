import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5 justify-between">
            <div className="flex items-center">
                <span className="font-bold ml-2">Library Management System</span>
            </div>
            <Link to="/books">All Books</Link>
            <Link to="/create-book">Add Books</Link>
            <Link to="/borrow-summary">Borrow Summary</Link>
            <div className="ml-auto">
                {/* <ModeToggle /> */}
            </div>
        </nav>
    );
}