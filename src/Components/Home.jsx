import { Link } from "react-router-dom"
import Banner from "./Banner"
import Quality from "./Quality"
import Shop from "./Shop"


const Home = () => {
  return (
    <div>
        <Banner/>
        
         <div>
            <Shop/>
            <Link className="flex items-center justify-center" to='/shop'><button className="btn bg-[#0000004d]">View All</button></Link>
            <Quality/>
         </div>

         
    </div>
  )
}

export default Home