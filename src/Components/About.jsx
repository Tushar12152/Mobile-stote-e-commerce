import { Link } from 'react-router-dom'
import aboutbg from '../assets/About-bg.jpg'
import aboutBrand from '../assets/aboutBrand.jpg'

const About = () => {
  return (
    <div>
         {/* AboutBanner */}
      <div className="pt-[100px]  relative" >
      <img src={aboutbg} alt="" />

      <div className="h-24  bg-transparent  absolute top-40 right-[900px] text-white">
        <h1 className="text-center font-bold text-2xl pt-4">CHECKOUT</h1>
        <div className='flex justify-center items-center'>
          <Link to='/'>Home  ➤➤ </Link>
          <Link to='/about'>About</Link>
        </div>
      </div>
      </div>

        <div className='flex gap-6 w-[80%] mx-auto mt-10 items-center justify-center border-b-2 pb-10'>
           <div className='w-[50%] '>
           <img className='w-[90%]' src={aboutBrand} alt="" />
           </div>

            <div className='w-[50%]'>
              <h1 className="text-xl font-bold ">About The Brand</h1>

              <p className="text-gray-300 py-5 w-[80%]">Aenean nonelec erat vitae torado aliquet varius. Vivamus aliquam volutpat semper. Integer dignisim vitae arcusan imperdiet imperdiet. Nullam varius sapien sedenim consequat, a eleifend velit ullamcorpe cras vela fermentum mauris. Morbi semi
              accumsan lorem sit amet nisl rhoncus, sodales morbi ex urna, congue.Nullam varius sapien sedenim consequat, a eleifend velit ullamcorpe cras vela fermentum mauris. Morbi semi accumsan lorem sit amet nisl rhoncus, sodales morbi ex urna, congue.</p>

              <button className='text-white bg-red-500 px-5 py-3 hover:bg-red-300'>Read More</button>
            </div>
        </div>


    </div>
  )
}

export default About