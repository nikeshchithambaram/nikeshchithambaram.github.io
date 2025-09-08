import { BiLogoGithub, BiLogoLinkedin, BiLogoMedium } from 'react-icons/bi'
import image from '../../public/image.jpg'

const Home = () => {
  return (
    <div id='home' className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
        <img src={image} alt="" className='w-[250] sm:w-[300px] rounded-full'/>

        <div className="space-y-1 sm:space-y-3">
          <h1 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl'>Nikesh Chithambaram</h1>
          <h3 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl'>Fullstack Dotnet Developer</h3>
          <p className='max-w-[600px] text-sm text-gray-500'>8 years of experience developing scalable, cloud-native applications in supply chain, logistics, and healthcare domains.</p>
        </div>
        <div className="flex gap-3">
          <a href="https://github.com/cnikesh">
          <BiLogoGithub className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/>
          </a>
          <a href="https://www.linkedin.com/in/nikesh-chithambaram/">
          <BiLogoLinkedin className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/>
          </a>
          <a href="https://medium.com/@nikeshniki19">
          <BiLogoMedium className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/>
          </a>

        </div>
      </div>
    </div>
  )
}

export default Home