import { createBrowserRouter } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar></Navbar>
    }
])
export default router;