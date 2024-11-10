import {createBrowserRouter} from "react-router-dom";
import SignUp from "./pages/auth/SignUp.tsx";
import SignIn from "./pages/auth/SignIn.tsx";

export const router = createBrowserRouter([
    {path: "/sign-up", element: <SignUp />},
    {path: "/sign-in", element: <SignIn />},
])