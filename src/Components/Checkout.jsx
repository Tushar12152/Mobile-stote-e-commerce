import { useState } from "react"
import { Link } from "react-router-dom"

const Checkout = () => {

   const [cuppon, setCuppon]=useState(null)

// console.log(cuppon)


  return (
    <div className="pt-32">
        <div className="h-24  bg-[#0000004d]  ">
               <h1 className="text-center font-bold text-2xl pt-4">CHECKOUT</h1>
        <div className='flex justify-center items-center'>
        <Link to='/'>Home  ➤➤ </Link>
        <Link to='/'>Checkout</Link>
      </div>
        </div>


      <div className="w-[80%] mx-auto mt-20">

         {/* cuppon */}

         <div className="bg-gray-200 border-t-4 border-blue-700 p-5">
             <p> Have a cuppon? <span onClick={()=>setCuppon(!cuppon)} className="hover:text-red-500 cursor-pointer">Click here to enter your code</span></p>
         </div>
         {cuppon&& <div className="mt-8 p-10 border duration-300 rounded-lg ">
                    <p className="mb-10 text-gray-400">If you have a coupon code, please apply it below.</p>

                    <div className=" ">
                    <div className="flex gap-20">
                     <input type="text" placeholder="Cupon Code" className="  p-4  w-[50%] border" />
                      <button className="bg-red-500 px-7 w-40  text-white hover:bg-gray-400">ApplyCupon</button>
                     </div>
                    </div>
         </div>}


        {/* PaymentMethod */}

        



      </div>










    </div>
  )
}

export default Checkout