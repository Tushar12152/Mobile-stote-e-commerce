import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Components/Home"
import About from "../Components/About"
import Shop from "../Components/Shop"
import Blog from "../Components/Blog"
import Contact from "../Components/Contact"
import Register from "../Components/Register"
import Login from "../Components/Login"
import Dashboard from "../Components/Dashboard/Dashboard"
import AddProduct from "../Components/Dashboard/AddProduct"
import AllProducts from "../Components/Dashboard/AllProducts"
import ProductDetails from "../Components/ProductDetails"
import PrivateRoute from "./PrivateRoute"
import UserProfile from "../Components/Dashboard/UserProfile"
import Checkout from "../Components/Checkout"
import ProductUpdate from "../Components/Dashboard/ProductUpdate"



const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/shop',
                element: <PrivateRoute>
                    <Shop />
                </PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: `details/:id`,
                element: <PrivateRoute>
                    <ProductDetails />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5001/products/${params.id}`)
            },
            {
                path: `shop/details/:id`,
                element: <PrivateRoute>
                    <ProductDetails />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5001/products/${params.id}`)
            },
            {
                path:'/checkout',
                element:<Checkout/>
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
        ]
    },

    
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/addProduct',
                element: <AddProduct />
            },
            {
                path: '/dashboard/allProduct',
                element: <AllProducts />
            },
            {
                path: '/dashboard/Profile',
                element: <UserProfile />
            },
            {
                path:'/dashboard/update/:id',
                element:<ProductUpdate/>,
                loader:({params})=>fetch(`http://localhost:5001/products/${params.id}`)
            }
        ]
    }
])

export default Router;