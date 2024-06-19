import { useState } from "react"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"
import useAxiosSecure from "../Hooks/useAxiosSecure"
import useAuth from "../Hooks/useAuth"
import { useQuery } from "@tanstack/react-query"

const Checkout = () => {

  const [cuppon, setCuppon] = useState(null)
  const handleCuppon = () => {
    toast.success('Thank you')
  }



  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()
  const usersMail = user?.email

  const { data: carts = [], } = useQuery({
    queryKey: ['addCartProducts'],
    queryFn: async () => {
      const res = await axiosSecure.get('/addCartProducts');
      return res.data;
    },
  });

  // console.log(carts)

  const specificUserscart = carts.filter(cart => cart?.addedBy === usersMail)


  // console.log(specificUserscart, 'f')

  const totalPrice = specificUserscart.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.price);
  }, 0);


  return (
    <div className="pt-32">
      <div className="h-24  bg-[#0000004d]  ">
        <h1 className="text-center font-bold text-2xl pt-4">CHECKOUT</h1>
        <div className='flex justify-center items-center'>
          <Link to='/'>Home  ➤➤ </Link>
          <Link to='/'>Checkout</Link>
        </div>
      </div>


     <form>
     <div className="w-[80%] mx-auto mt-20">

{/* cuppon */}

<div className="bg-gray-200 border-t-4 border-blue-700 p-5">
  <p> Have a cuppon? <span onClick={() => setCuppon(!cuppon)} className="hover:text-red-500 cursor-pointer">Click here to enter your code</span></p>
</div>
{cuppon && <div className="mt-8 p-10 border duration-300 rounded-lg ">
  <p className="mb-10 text-gray-400">If you have a coupon code, please apply it below.</p>

  <div className=" ">
    <div className="flex gap-20">
      <input type="text" placeholder="Cupon Code" className="  p-4  w-[50%] border" />
      <button onClick={() => handleCuppon()} className="bg-red-500 px-7 w-40  text-white hover:bg-gray-400">ApplyCupon</button>
    </div>
  </div>
</div>}


{/* PaymentMethod */}

<div className="flex justify-between gap-10">

  <div className="w-[50%]">
    <h1 className="font-semibold text-lg  my-10">Billing details</h1>
    <div>
     

        <div className="form-control  w-Full mb-5">
          <label className="label">
            <span className="label-text text-gray-300">First Name</span>
          </label>
          <input name="firstName" type="text" placeholder="" className="input input-bordered" required />
        </div>

        <div className="form-control  w-Full mb-5">
          <label className="label">
            <span className="label-text text-gray-300">Last Name</span>
          </label>
          <input type="text" name="lastName" placeholder="" className="input input-bordered" required />
        </div>


        <div className="form-control  w-Full mb-5">
          <label className="label">
            <span className="label-text text-gray-300">Country</span>
          </label>
          <input type="text" name="country" placeholder="" className="input input-bordered" required />
        </div>


        <div className="form-control  w-Full mb-5">
          <label className="label">
            <span className="label-text text-gray-300">City</span>
          </label>
          <input type="text" name="city" placeholder="" className="input input-bordered" required />
        </div>


        <div className="form-control  w-Full mb-5">
          <label className="label">
            <span className="label-text text-gray-300">Post code</span>
          </label>
          <input type="number" name="code" placeholder="" className="input input-bordered" required />
        </div>


        <div className="form-control  w-Full mb-5">
          <label className="label">
            <span className="label-text text-gray-300">Phone</span>
          </label>
          <input type="number" name="phone" placeholder="" className="input input-bordered" required />
        </div>

        <div className="form-control  w-Full mb-5">
          <label className="label">
            <span className="label-text text-gray-300">Email</span>
          </label>
          <input type="text" name="email" placeholder="" className="input input-bordered" required />
        </div>

    </div>
  </div>


  <div className="w-[40%] " >
    <h1 className="font-semibold text-lg my-10">Your order</h1>

    <div>
      <div className="flex justify-between border-b-2 pb-2">
        <h1 className="font-bold" >Products</h1>
        <h1 className="font-bold "> Sub Total</h1>
      </div>


      <div className="my-5 border-b-2">
      {
        specificUserscart.map(cart => <div key={cart?._id} className="flex justify-between  pb-2 mb-5">
          <h1 className="text-gray-300" >{cart?.Name}</h1>
          <h1 className="text-gray-300 "> {cart?.price}</h1>
        </div>)
      }
      </div>


      <div>
          <div className="flex justify-between ">
              <h1 className="font-semibold text-lg ">Total</h1>
              <h1 className="text-gray-300 ">:   {totalPrice} /-</h1>

          </div>
      </div>



          <div className="mt-10">

          <div className="flex gap-6 mb-5">
            <input type="radio" name="radio-5" className="radio " checked />
            <h1 className="text-semibold"> Direct bank transfer</h1>
          </div>

          <div className="flex gap-6 mb-5">
            <input type="radio" name="radio-5" className="radio " checked />
            <h1 className="text-semibold"> Cash on delivery</h1>
          </div>


          <div className="flex gap-6 items-center mb-5">
            <input type="radio" name="radio-5" className="radio " checked />
            <h1 className="text-semibold"> PayPal</h1>
            <img className="w-28" src="https://i.ibb.co/Jyyc25s/AM-mc-vs-dc-ae.jpg" alt="" />
          </div>

          </div>


         <input className="p-4 bg-red-500 w-full text-white cursor-pointer hover:bg-gray-400" type="submit" value="Place Order" />


    </div>

  </div>
</div>



</div>
     </form>










    </div >
  )
}

export default Checkout