import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdOutlineUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";





const AllProducts = () => {

    const axiosSecure = useAxiosSecure()

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get('/products');
            return res.data;
        },
    });


    //   console.log(products)

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log(id)
                axiosSecure.delete(`products/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            refetch()

                        }
                    })
            }
        })
    }


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

                        {products.map((product, idx) => {
                            //   {   console.log(product)}

                            return <tr key={product._id}>
                                <th>
                                    {idx + 1}
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
                                    <Link to={`/dashboard/update/${product?._id}`} className="btn btn-ghost btn-xs"><span className="text-xl"><MdOutlineUpdate /></span></Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(product?._id)} className="btn btn-ghost btn-xs"><span className="text-xl"><MdDelete /></span></button>
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