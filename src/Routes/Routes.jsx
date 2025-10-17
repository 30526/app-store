import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";
import Apps from "../pages/Apps/Apps";
import Installed from "../pages/Installed/Installed";
import AppDetails from "../pages/AppDetails/AppDetails";
import Error from "../components/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
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
            },
            {
                path: '/appDetails/:id',
                element: <AppDetails></AppDetails>
            }
        ]
    }
])
export default router;