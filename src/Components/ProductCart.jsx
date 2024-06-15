import { PropTypes } from "prop-types"
import { Link } from "react-router-dom"



const ProductCart = ({product}) => {
    // console.log( 'cart',product)
 
    


  return (
    <div>

<div className={`card card-compact w-[400px] bg-base-100 shadow-2xl hover:cursor-pointer hover:bg-[#0000004d] group transition duration-700 ease-in-out `}>

  <figure><img className="p-4 group-hover:opacity-50 w-[200px] h-[200px]   group-hover:rounded-full" src={product?.imageUrl} alt="Mobile" /></figure>

  <div className=" flex justify-between ">

       <div className="p-5">
       <h2 className="card-title ">{product?.Name}</h2>
       <p>{product?.Category}</p>
       </div>

    <div className=" p-5">
       <button className=" btn hidden group-hover:block"> <Link to={`details/${product?._id}`} className="">View Details</Link></button>
    </div>

  </div>
</div>
    </div>
  )
}

ProductCart.propTypes={
    product:PropTypes.any
}

export default ProductCart