import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact/Contact";
import App from "../App";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";
import Users from "../pages/Users/Users";
import Home from "../pages/Home/Home";
import UserDetails from "../components/UserDetails/UserDetails";
import Login from "../pages/Auth/Login/Login";
import Registration from "../pages/Auth/Registration/Registration";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/users',
                element: <Users />,
                loader: ()=> fetch('https://jsonplaceholder.typicode.com/photos'),
                errorElement: <NotFound />,
            },
            {
                path: '/userDetails/:id',
                element: <UserDetails />,
                loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`),
                errorElement: <NotFound />,
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
]);
