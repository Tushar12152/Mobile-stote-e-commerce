import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Components/Home"
import About from "../Components/About"
import Shop from "../Components/Shop"
import Blog from "../Components/Blog"
import Contact from "../Components/Contact"



const Router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/shop',
                element: <Shop/>
            },
            {
                path:'/blog',
                element: <Blog/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
        ]
    }
])

export default Router;