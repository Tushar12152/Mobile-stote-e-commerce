import { Link } from "react-router-dom"
import { LuEye } from "react-icons/lu";
import { useState } from "react";
import { GoEyeClosed } from "react-icons/go";



const Login = () => {

   const [visible,setVisible]=useState(true)
//    console.log(visible)

    const handleLogin=(e)=>{
         e.preventDefault()

         const form=e.target;

         const email=form.email.value;
         const password= form.password.value;

         console.log(email, password)


    }



  return (
    <div>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
    </div>

    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <p className="font-bold py-2 text-xl text-center">Login from here</p>
             <img className="w-[50%] mx-auto" src= {!visible? "https://i.ibb.co/cTmLJQf/download.jpg":"https://i.ibb.co/Qb5f5kK/download.jpg"} alt="" />

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
                      <input type={visible?"password": "text"} name="password" placeholder="password" className="input input-bordered" required />
                        <span onClick={()=>setVisible(!visible)} className="absolute top-4 right-5 cursor-pointer">  {visible? <LuEye/>:<GoEyeClosed/>} </span>
               </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
             
          </label>

             <p className="label-text-alt ">Do not have an account? Please <Link className="text-red-500" to='/register'> Register </Link></p>

        </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-500 text-white">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login