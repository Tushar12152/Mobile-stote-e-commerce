import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Components/Home"
import About from "../Components/About"


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
            }
        ]
    }
])

export default Router;