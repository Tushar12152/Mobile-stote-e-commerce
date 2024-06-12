import { NavLink, Outlet, useNavigate } from "react-router-dom"
import useAuth from "../../Hooks/useAuth"
import toast from "react-hot-toast"


const Dashboard = () => {

const{logout}=useAuth()
const navigate=useNavigate()

const handleSignOut=()=>{
    logout()
    toast.success('Sign Out')
    navigate('/')
}


  return (
    <div>
           <div className="grid grid-cols-12 h-full">
             
             <div className="col-span-5 md:col-span-3  min-h-screen bg-[#0000004d] text-white">
                 <ul className="menu p-4">
                     
                        <div>
                             <li>
                                 <NavLink to="/dashboard/Profile">
                             
                                    .</NavLink>
                             </li>
                             <li>
                                 <NavLink to="/dashboard/createTask">
                             
                                 . </NavLink>
                             </li>
                             <li>
                                 <NavLink to="/dashboard/todo">
                             
                                 .</NavLink>
                             </li>
 
 
                             <li>
                                 <NavLink to="/dashboard/previous">
                                     
                                 .</NavLink>
                             </li>
                             
                             <li>
                                 <NavLink to="/dashboard/ongoing">
                                            
                                 .</NavLink>
                             </li>
                             <li>
                                 <NavLink to="/dashboard/complete">
                                 
                                . </NavLink>
                             </li>
                            
                         </div>
                            
                  
 
 
 
 
                     {/* shared nav links */}
                     <div className="divider"></div>
                     <li>
                         <NavLink to="/">
                           
                             Home</NavLink>
                     </li>
                     <li>
                         <a  onClick={handleSignOut}>
                           
                             Sign Out</a>
                     </li>
                    
                 </ul>
             </div>
             {/* dashboard content */}
             <div className="col-span-7 md:col-span-9  p-4 md:p-8">
 
                 <Outlet></Outlet>
 
             </div>
         </div>
    </div>
  )
}

export default Dashboard