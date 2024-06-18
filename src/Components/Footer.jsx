

const Footer = () => {
  return (
    <div className="mt-10">
         
          {/* newsletter */}
            <div className="bg-gray-300">
                 <div className=" w-[80%] mx-auto flex justify-between  py-10">
                     <div className="">
                          <h1 className="text-xl font-bold"> Newsletter</h1>
                          <p className="text-md"> Subscribe to our newsletter and get 10% off your first purchase</p>
                     </div>
                     <div className="flex gap--1">
                     <input type="text" placeholder="Your Email Address" className=" w-full p-4 rounded-l-xl " />
                      <button className="bg-red-500 px-2 rounded-r-lg text-white hover:bg-gray-400">Subscribe</button>
                     </div>
                 </div>
            </div>



    </div>
  )
}

export default Footer