import { NavLink, Outlet, useNavigate } from "react-router-dom"
import useAuth from "../../Hooks/useAuth"
import toast from "react-hot-toast"
import { FaSignOutAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Dashboard = () => {

const{logout}=useAuth()
const navigate=useNavigate()
const axiosSecure=useAxiosSecure()
const {user}= useAuth()

const handleSignOut=()=>{
    logout()
    toast.success('Sign Out')
    navigate('/')
}


const { data: users = [] } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

//   console.log(user?.email)
// console.log(users)

  const Adminsinfo= users?.find(user=>user?.role==="admin")

  // console.log(Adminsinfo?.email)

  const Admin= Adminsinfo?.email===user?.email;

  // console.log(Admin)




  return (
    <div>
           <div className="grid grid-cols-12 h-full">
             
             <div className="col-span-5 md:col-span-3  min-h-screen bg-[#0000004d] text-white">
                 <ul className="menu p-4">
                     
                      {
                        !Admin?  <div>
                        <li>
                            <NavLink to="/dashboard/Profile">
                        
                               Profile</NavLink>
                        </li>
                       
                       
                    </div>
                    
                    :

                       <div>
                           <li>
                            <NavLink to="/dashboard/adminProfile">
                             Admin Profile           
                            </NavLink>
                        </li>
                           <li>
                            <NavLink to="/dashboard/addProduct">
                             Add Product          
                            </NavLink>
                        </li>
                           <li>
                            <NavLink to="/dashboard/allProduct">
                              All Products          
                            </NavLink>
                        </li>
                       </div>
                      }
                            
                  
 
 
 
 
                     {/* shared nav links */}
                     <div className="divider"></div>
                     <li>
                         <NavLink to="/">
                           
                             Home</NavLink>
                     </li>
                     <li>
                         <a  onClick={handleSignOut}>
                           
                             Sign Out <FaSignOutAlt/></a>
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