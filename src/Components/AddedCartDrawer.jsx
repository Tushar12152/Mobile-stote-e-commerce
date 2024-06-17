import { useQuery } from "@tanstack/react-query";
import { LuShoppingCart } from "react-icons/lu"
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { RxCross2 } from "react-icons/rx";



const AddedCartDrawer = () => {

  const axiosSecure = useAxiosSecure()

  const { data: carts = [] } = useQuery({
    queryKey: ['addCartProducts'],
    queryFn: async () => {
      const res = await axiosSecure.get('/addCartProducts');
      return res.data;
    },
  });

  console.log(carts)



  const handleRemove=(id)=>{
       console.log(id)
       axiosSecure.delete('/removeAddToCart', id)

  }





  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button ">
            <div className="indicator">
              <span className="indicator-item badge bg-[rgba(179,176,176,0.3)] text-sm">{carts?.length}</span>

              <button className="text-lg"><LuShoppingCart /></button>
            </div>
          </label>
        </div>



        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            {carts.map(cart => <div className="relative" key={cart._id}>


                   <button onClick={()=>handleRemove(cart?._id)} className="absolute top-5 right-3"><RxCross2/></button>

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








          </ul>
        </div>
      </div>
    </div>
  )
}

export default AddedCartDrawer