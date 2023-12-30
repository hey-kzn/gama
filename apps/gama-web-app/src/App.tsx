import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LoginPage} from "./pages/login/LoginPage";
import {HomePage} from "./pages/home/HomePage";
import {RegisterPage} from "./pages/register/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    }
])

export const App = () => {
    return(
        <RouterProvider router={router}/>
    )
}