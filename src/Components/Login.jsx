import { Link } from "react-router-dom"


const Login = () => {


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
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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