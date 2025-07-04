import App from "@/App";
import AllBooks from "@/pages/allBooks";
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
            }
        ]
    }
])

export default router;