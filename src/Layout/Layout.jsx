import { Outlet } from "react-router-dom"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"


const Layout = () => {
  return (
    <div>
        
        <div className="w-[95%] mx-auto">
        <Nav/>     
        </div>
        <Outlet/>

        <Footer/>

    </div>
  )
}

export default Layout