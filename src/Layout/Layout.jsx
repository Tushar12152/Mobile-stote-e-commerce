import { Outlet } from "react-router-dom"
import Nav from "../Components/Nav"


const Layout = () => {
  return (
    <div>
        
        <div className="w-[95%] mx-auto">
        <Nav/>
        <Outlet/>
        </div>

    </div>
  )
}

export default Layout