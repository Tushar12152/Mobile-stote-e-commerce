
import { Link, useLoaderData } from 'react-router-dom'
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';


const ProductDetails = () => {
  const product = useLoaderData()
  const { Bettery, Camara, Category, Display, Name, Ram, Status, Storage, price } = product;
  const {user}=useAuth()
  const addedBy=user?.email;
  const axiosSecure=useAxiosSecure()


  // console.log(product)

    const handleAddToCart=(product)=>{
      const { Bettery, Camara, Category, Display, Name, Ram, Status, Storage, price, imageUrl } = product;

           const addItem={ Bettery, Camara, Category, Display, Name, Ram, Status, Storage, price, addedBy, imageUrl}
          //  console.log(addItem)

           axiosSecure.post('/addCartProducts',addItem)
           .then(res=>{
               if(res.data.acknowledged){
                toast.success('completely added to cart')
                  
               }
           })



    }






  return (
    <div className='pt-32'>
      <div className='h-12 bg-[#0000004d] flex justify-center items-center'>
        <Link to='/'>Home  ➤➤ </Link>
        <Link to='/SHOP'>kIDS  ➤➤ </Link>
        <Link to='/'>Crush On You Crossbody </Link>
      </div>




      <div className='w-[70%] mx-auto justify-center flex items-center gap-20 mt-20'>
      <div className='w-[40%] overflow-hidden rounded-2xl border'>
  <img className='h-[400px] w-full rounded-xl cursor-pointer bg-[#0000004d] p-5 text-right transform transition-transform duration-300 hover:scale-110' src={product?.imageUrl} alt="" />
</div>

        <div className='h-[400px] w-[50%]'>
          <h1 className='font-bold text-2xl text-left mb-2'>{Name}</h1>
          <h2 className='font-semi-bold text-lg text-left mb-2'>{Category}</h2>
          <h2 className='font-semi-bold text-lg text-left mb-2'>Price:<span className='text-red-500'> ৳{price}/-</span></h2>
          <h2 className='font-semi-bold text-lg text-left mb-2'>Bettery: {Bettery} mah</h2>
          <h2 className='font-semi-bold text-lg text-left mb-2'>Camara: {Camara} MP</h2>
          <h2 className='font-semi-bold text-lg text-left mb-2'>Display: {Display} inch</h2>
          <h2 className='font-semi-bold text-lg text-left mb-2'>Ram: {Ram} Gb</h2>
          <h2 className='font-semi-bold text-lg text-left mb-6'>Storage: {Storage} Gb</h2>

          <h2 className={`font-semi-bold text-lg text-left mb-2 border-b-2 w-[50%] `}>Status: <span className={`${Status === "available" ? 'text-green-400' : "text-red-500"}`}>{Status}</span></h2>

          <div className='mt-4'>
            <button onClick={()=>handleAddToCart(product)} className={`btn bg-[#0000004d] ${Status === 'available' ? 'enabled' : 'btn-disabled cursor-none'}`}>Add To Cart</button>
          </div>
        </div>
      </div>




    </div>
  )
}

export default ProductDetails