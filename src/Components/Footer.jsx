

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


            {/* footer */}

      <div className="bg-base-200">
        
      <footer className="footer w-[80%] mx-auto p-10 bg-base-200 text-base-content shadow-md">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 


  
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <nav className="text-right">
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
            </footer>




            
      </div>



    </div>
  )
}

export default Footer