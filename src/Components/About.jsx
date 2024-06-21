import { Link } from 'react-router-dom'
import aboutbg from '../assets/About-bg.jpg'
import aboutBrand from '../assets/aboutBrand.jpg'
import whyUs from '../assets/whyus.jpg'

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


        {/* whyChooseUs */}

        <div>
           <h1 className="text-center font-bold text-2xl mt-10">Why choose us</h1>
           <p className="text-center text-gray-300 mt-5">Aenean non erat vitae tortor aliquet varius. Vivamus aliquam volutpat semper. Integer dignissim vitae arcu <br /> imperdiet imperdiet. Nullam varius sapien sed enim consequat, eleifend velit ullamcorper.
           </p>

            <div className='flex w-[80%] mx-auto mt-10 items-center justify-center'>
                        <div className='w-[50%]'>
                          <img src={whyUs} alt="" />
                        </div>


                       <div className='w-[50%]'>
                                <div className='mb-5'>
                                    <h1 className='font-bold text-gray-300 text-xl'>01</h1>
                                    <h1 className="text-lg font-semibold">Minimal design</h1>
                                    <p className="text-gray-300">Fusce mollis urna tortorInteger dignissim vitae arcu imperdiet imperdiet. <br />  Nullam varius sapien sed enim consequat, eleifend velit ullamcorper.</p>
                                </div>
                                <div className='mb-5'>
                                    <h1 className='font-bold text-gray-300 text-xl'>02</h1>
                                    <h1 className="text-lg font-semibold">Minimal design</h1>
                                    <p className="text-gray-300">Fusce mollis urna tortorInteger dignissim vitae arcu imperdiet imperdiet. <br />  Nullam varius sapien sed enim consequat, eleifend velit ullamcorper.</p>
                                </div>
                                <div className='mb-5'>
                                    <h1 className='font-bold text-gray-300 text-xl'>03</h1>
                                    <h1 className="text-lg font-semibold">Minimal design</h1>
                                    <p className="text-gray-300">Fusce mollis urna tortorInteger dignissim vitae arcu imperdiet imperdiet. <br />  Nullam varius sapien sed enim consequat, eleifend velit ullamcorper.</p>
                                </div>
                       </div>
            </div>

        </div>

    </div>
  )
}

export default About