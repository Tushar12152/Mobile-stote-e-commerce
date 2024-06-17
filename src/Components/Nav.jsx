import { Link, NavLink } from "react-router-dom"
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

import { CiUser } from "react-icons/ci";
import useAuth from "../Hooks/useAuth";
import AddedCartDrawer from "./AddedCartDrawer";


const Nav = () => {

    const {user}=useAuth()


     const NavMenu= <div className="flex gap-4">
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 font-bold text-md" : "font-bold text-md" }>Home</NavLink>
        <NavLink to="/shop" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 font-bold text-md" : "font-bold text-md" }>Shop</NavLink>
        <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 font-bold text-md" : "font-bold text-md" }>About</NavLink>
        <NavLink to="/blog" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 font-bold text-md" : "font-bold text-md" }>Blog</NavLink>
        <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 font-bold text-md" : "font-bold text-md" }>Contact</NavLink>           
     </div>


  return (
    <div>
        <div className="navbar fixed w-[95%] z-10">
  <div className="navbar-start">


    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>


      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {NavMenu}
      </ul>



    </div>

    <a className=" text-xl font-bold ">Mobile Store</a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {NavMenu}
    </ul>
  </div>
  <div className="navbar-end">
      <div className=" flex gap-4">
         <Link className="text-md" to='/'><IoIosSearch/></Link>
         <Link className="text-md" to='/'><CiHeart/></Link>
         <button className="text-md" ><AddedCartDrawer/></button>
         <Link className="text-md" to={user?'/dashboard':'/login'}><CiUser/></Link>

          
         
         

      </div>
  </div>
</div>
    </div>
  )
}

export default Nav