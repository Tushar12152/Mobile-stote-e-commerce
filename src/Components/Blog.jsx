import { Link } from 'react-router-dom'
import aboutbg from '../assets/About-bg.jpg'

const Blog = () => {
  return (
    <div>

 {/* AboutBanner */}
 <div className="pt-[100px]  relative" >
      <img src={aboutbg} alt="" />

      <div className="h-24  bg-transparent  absolute top-40 right-[900px] text-white">
        <h1 className="text-center font-bold text-2xl pt-4">The Blog</h1>
        <div className='flex justify-center items-center'>
          <Link to='/'>Home  ➤➤ </Link>
          <Link to='/about'>About</Link>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Blog