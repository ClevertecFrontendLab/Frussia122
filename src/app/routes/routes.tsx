import { MainPage } from "@pages/home";
import { Layout } from "@pages/Layout";
import { createBrowserRouter } from "react-router-dom";

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MainPage />
            }
        ]
    }
])