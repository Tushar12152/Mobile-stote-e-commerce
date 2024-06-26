// import { Link, useLocation, useNavigate } from "react-router-dom"
// import { LuEye } from "react-icons/lu";
// import { useState } from "react";
// import { GoEyeClosed } from "react-icons/go";
// import useAuth from "../Hooks/useAuth";
// import toast from "react-hot-toast";



// const Login = () => {

//   const navigate=useNavigate()
//   const location=useLocation()
//    const [visible,setVisible]=useState(true)
//    const{login,loading}=useAuth()

//     const handleLogin=(e)=>{
//          e.preventDefault()

//          const form=e.target;

//          const email=form.email.value;
//          const password= form.password.value;

//         //  console.log(email, password)
//         login(email,password)
//         .then(res=>{
//              console.log(res.user)
//              toast.success('Login confirmed')
//              navigate(location?.state ? location.state:"/")
//         })


//     }


//     // console.log("",user)


//   return (
//     <div>

// <div className="hero min-h-screen bg-base-200">
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <div className="text-center lg:text-left">
     
//     </div>

    
//     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//           <p className="font-bold py-2 text-xl text-center">Login from here</p>
//              <img className="w-[50%] mx-auto" src= {!visible? "https://i.ibb.co/cTmLJQf/download.jpg":"https://i.ibb.co/Qb5f5kK/download.jpg"} alt="" />

//       <form onSubmit={handleLogin} className="card-body">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="email" name="email" placeholder="email" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//                <div className="relative">
//                       <input type={visible?"password": "text"} name="password" placeholder="password" className="input input-bordered w-full" required />
//                         <span onClick={()=>setVisible(!visible)} className="absolute top-4 right-5 cursor-pointer">  {visible? <LuEye/>:<GoEyeClosed/>} </span>
//                </div>
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
             
//           </label>

//              <p className="label-text-alt ">Do not have an account? Please <Link className="text-red-500" to='/register'> Register </Link></p>

//         </div>
//         <div className="form-control mt-6">
//           <button className="btn bg-red-500 text-white">{loading?<span className="loading loading-dots loading-xs"></span>: "Log In"}</button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }

// export default Login




import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { useState } from "react";
import { GoEyeClosed } from "react-icons/go";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const { login, loading } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success('Login confirmed');
        navigate(location?.state ? location.state : "/");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center">
        <div className="text-center lg:text-left mb-6 lg:mb-0"></div>
        <div className="animated-border p-1 rounded-lg">
          <div className="card w-full max-w-sm shadow-2xl bg-base-100 p-6 rounded-md">
            <p className="font-bold py-2 text-xl text-center">Login from here</p>
            <img className="w-1/2 mx-auto" src={!visible ? "https://i.ibb.co/cTmLJQf/download.jpg" : "https://i.ibb.co/Qb5f5kK/download.jpg"} alt="" />
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input type={visible ? "password" : "text"} name="password" placeholder="password" className="input input-bordered w-full" required />
                  <span onClick={() => setVisible(!visible)} className="absolute top-3 right-4 cursor-pointer">
                    {visible ? <LuEye /> : <GoEyeClosed />}
                  </span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <p className="label-text-alt">Do not have an account? Please <Link className="text-red-500" to='/register'> Register </Link></p>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-red-500 text-white">{loading ? <span className="loading loading-dots loading-xs"></span> : "Log In"}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
