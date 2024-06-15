import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdOutlineUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";





const AllProducts = () => {

    const axiosSecure=useAxiosSecure()

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
          const res = await axiosSecure.get('/products');
          return res.data;
        },
      });


      console.log(products)


  return (
    <div>
  <h1 className="font-bold text-2xl text-center py-5 border-b-2 w-[20%] mx-auto">Uploaded Mobiles</h1>



  <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        #
        <th>Model</th>
        <th>Brand</th>
        <th>Ram</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
 
          {products.map((product,idx)=>{
  {   console.log(product)}

return <tr key={product._id}>
<th>
  {idx+1}
</th>
<td>
  <div className="flex items-center gap-3">
   
    <div>
      <div className="font-bold">{product?.Name}</div>
     
    </div>
  </div>
</td>
<td>
{product?.Category}
</td>
<td>{product?.Ram}</td>
<th>
  <button className="btn btn-ghost btn-xs"><span className="text-xl"><MdOutlineUpdate/></span></button>
</th>
<th>
  <button className="btn btn-ghost btn-xs"><span className="text-xl"><MdDelete/></span></button>
</th>
</tr>


          })}
      
    </tbody> 
  </table>
</div>

  

     

    </div>
  )
}

export default AllProducts