import { MainPage } from "@pages/home";
import { createBrowserRouter } from "react-router-dom";

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    }
])