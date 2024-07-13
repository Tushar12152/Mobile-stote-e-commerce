import { Link } from 'react-router-dom'
import aboutbg from '../assets/About-bg.jpg'
import aboutBrand from '../assets/aboutBrand.jpg'
import whyUs from '../assets/whyus.jpg'
import cr1 from '../assets/cr1.jpg'
import cr2 from '../assets/cr-2.jpg'

const About = () => {
 const teamMembers = [
    {
      name: 'Jack Holland',
      image: 'https://i.ibb.co/Q9gGF4Y/t1.jpg', 
    },
    {
      name: 'Clara Morgan',
      image: 'https://i.ibb.co/nn0Zz4v/t2.jpg',
    },
    {
      name: 'Dante Basco',
      image: 'https://i.ibb.co/YW6ftDM/t3.jpg',
    },
    {
      name: 'Sonia Elsie',
      image: 'https://i.ibb.co/2SX0hmb/t4.jpg',
    },
  ]



  return (
    <div>
         {/* AboutBanner */}
      <div className="pt-[100px]  relative" >
      <img src={aboutbg} alt="" />

      <div className="h-24  bg-transparent  absolute top-40 right-[900px] text-white">
        <h1 className="text-center font-bold text-2xl pt-4">About Us</h1>
        <div className='flex justify-center items-center'>
          <Link to='/'>Home  ➤➤ </Link>
          <Link to='/about'>Blog</Link>
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


        {/* carosel */}

           <div className='w-full  mt-10'>
           <div className="carousel w-full bg-gray-200">
  <div id="slide1" className="carousel-item relative w-full">
   
<div className='w-[80%] mx-auto flex gap-6 items-center justify-center p-5'>
     <div className='w-[50%]'>
         <img className='w-[50%] rounded-full' src={cr1} alt="" />
      </div> 
     <div className='w-[50%]'>
        
        <h1 className="text-7xl text-red-500">”</h1>
        <p className="text-gray-500 my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo corporis voluptatum quas recusandae incidunt cum quidem veniam aperiam deleniti delectus.</p>
        <h1 className="text-semibold text-xl">Gomez</h1>
        <p className="text-red-500">Customer</p>

     </div>
</div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
  <div className='w-[80%] mx-auto flex gap-6 items-center justify-center p-5'>
     <div className='w-[50%]'>
         <img className='w-[50%] rounded-full' src={cr2} alt="" />
      </div> 
     <div className='w-[50%]'>
        
        <h1 className="text-7xl text-red-500">”</h1>
        <p className="text-gray-500 my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo corporis voluptatum quas recusandae incidunt cum quidem veniam aperiam deleniti delectus.</p>
        <h1 className="text-semibold text-xl">chase</h1>
        <p className="text-red-500">Customer</p>

     </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
  
</div>
           </div>

         {/* ourTeam */}


<div className=" mt-10 w-[80%] mx-auto">
  <h2 className="text-2xl font-bold mb-8 text-center">Our team</h2>
    <div className="flex justify-center space-x-6">
        {teamMembers.map((member, index) => (
          <div className="relative w-" key={index}>
            <div className="relative overflow-hidden">
              <img className="w-full hover:cursor-pointer" src={member.image} alt={member.name} />
              <div className="absolute inset-0 bg-red-600 opacity-0 hover:opacity-35 transition-opacity duration-300"></div>
            </div>
            <p className="mt-4">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
</div>
  )
}

export default About