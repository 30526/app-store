import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";
import Apps from "../pages/Apps/Apps";
import Installed from "../pages/Installed/Installed";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: Error,
        // hydrateFallbackElement: <p>Loading....</p>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/apps',
                element: <Apps></Apps>
            },
            {
                path: '/installed',
                element: <Installed></Installed>
            }
        ]
    }
])
export default router;