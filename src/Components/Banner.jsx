import { Link } from "react-router-dom"
import bannerImage from "../assets/banner.png"
import bannerBg from "../assets/banner-bg.png"

const Banner = () => {
  return (
    <div className="bg-[#0000004d] pt-10">
      <div className="flex  items-center gap-10 justify-center ">
      <img className="w-[40%] " src={bannerImage} alt="" />

         <div className="flex flex-col gap-6 w-[50%] relative ">
        
              <h1 className="text-red-600 z-10 font-semibold text-2xl mr-20 ">New Collection</h1>
              <h1 className="font-bold z-10 text-4xl ">Spring Sale <span className=" text-red-600"> 30%</span></h1>
              <p className="z-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsam, officia necessitatibus <br /> adipisci quisquam quod fuga porro eveniet magnam repudiandae?</p>
              <Link to='/shop' className="btn z-10 bg-red-600 text-white w-28">Shop Now</Link>

              <img className="w-[50%] absolute z-0 left-1 bottom-5 hover:left:10 hover:bottom-20 delay-100 duration-300" src={bannerBg} alt="" />
         </div>
      </div>
       
    </div>
  )
}

export default Banner