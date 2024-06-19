import { useQuery } from "@tanstack/react-query";
import { LuShoppingCart } from "react-icons/lu"
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";



const AddedCartDrawer = () => {

  const axiosSecure = useAxiosSecure()
  const {user}= useAuth()
  const usersMail=user?.email

  const { data: carts = [], refetch } = useQuery({
    queryKey: ['addCartProducts'],
    queryFn: async () => {
      const res = await axiosSecure.get('/addCartProducts');
      return res.data;
    },
  });

  // console.log(carts)

  const specificUserscart=carts.filter(cart=>cart?.addedBy===usersMail)


// console.log(specificUserscart,'f')

  const totalPrice = specificUserscart.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.price);
  }, 0);




  const handleRemove = (id) => {
    // console.log(id)
    axiosSecure.delete(`/removeAddToCart/${id}`)
      .then(res => {
        if (res.data.deletedCount) {
          refetch()
        }
      })

  }

  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button ">
            <div className="indicator">
              <span className="indicator-item badge bg-red-500 text-white text-sm">{specificUserscart?.length}</span>

              <button className="text-lg"><LuShoppingCart /></button>
            </div>
          </label>
        </div>



        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay z-10"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content z-10">
            {/* Sidebar content here */}

            <div className="h-[calc(100vh-200px)] ">
              {specificUserscart.map(cart => <div className="relative " key={cart._id}>


                <button onClick={() => handleRemove(cart?._id)} className="absolute top-5 right-3"><RxCross2 /></button>

                <div className=" bg-base-200 shadow-xl flex justify-between items-center mb-2">
                  <div className="hero-content flex-col lg:flex-row">
                    <img src={cart?.imageUrl} className="max-w-sm rounded-lg shadow-2xl w-20" />
                    <div>

                      <p className="py-2 text-lg font-bold"> {cart?.Category}</p>
                      <p className="">{cart?.Name}</p>

                    </div>
                  </div>
                </div>
              </div>)}
            </div>

            <div className="border-t-2 ">
              <h1 className="py-2 text-lg font-semi-bold ">Total :{totalPrice}</h1>


                 <div className="flex justify-around mt-12">
                    <Link to='/shop' className="btn bg-[rgba(179,176,176,0.3)] ">Shop</Link>
                    <Link to='/checkout' className="btn bg-[rgba(201,103,103,0.3)] ">Checkout</Link>
                    
                 </div>

            </div>

          </ul>

        </div>
      </div>
    </div>
  )
}

export default AddedCartDrawer