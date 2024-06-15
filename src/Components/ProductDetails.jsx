
import { useLoaderData } from 'react-router-dom'

const ProductDetails = () => {
    const product=useLoaderData()
    console.log(product)
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails