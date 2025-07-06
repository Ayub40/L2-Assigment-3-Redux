import App from "@/App";
import BookDetails from "@/module/AllBooks/BookDetails";
import EditBook from "@/module/AllBooks/EditBook";
import AllBooks from "@/pages/allBooks";
import BorrowBookForm from "@/pages/BorrowBookForm";
import borrowSummary from "@/pages/borrowSummary";
import createBooks from "@/pages/createBooks";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: AllBooks,
            },
            {
                path: "books",
                Component: AllBooks,
            },
            {
                path: "create-book",
                Component: createBooks,
            },
            {
                path: "borrow-summary",
                Component: borrowSummary,
            },
            {
                path: "borrow/:bookId",
                Component: BorrowBookForm,
            },
            {
                path: "books/:id",
                Component: BookDetails,
            },
            {
                path: "edit-book/:id",
                Component: EditBook,
            }

        ]
    }
])

export default router;