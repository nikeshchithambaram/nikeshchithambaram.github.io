import { BiLogoAngular, BiLogoDocker, BiLogoGit, BiLogoReact, BiLogoTypescript } from "react-icons/bi"
import { SiDotnet } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const Skills = () => {
  return (
    <div id="skills" className="flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36">
      <h1 className="text-center text-5xl font-light">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <div>
          <BiLogoAngular className="cursor-pointer text-[80px] text-red-800 
          transition-all duration-300 hover:-translate-y-5 
          sm:text-[100px] md:text-[120px]"/>
        </div>
        <div>
          <BiLogoReact className="cursor-pointer text-[80px] text-sky-500 
          transition-all duration-300 hover:-translate-y-5 
          sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
          <SiDotnet className=" cursor-pointer text-[80px] text-blue-700 
          transition-all duration-300 hover:-translate-y-5 
          sm:text-[100px] md:text-[120px] rounded-"/>
        </div>
        <div>
          <VscAzure className="cursor-pointer text-[80px] text-sky-600 
          transition-all duration-300 hover:-translate-y-5 
          sm:text-[70px] md:text-[100px]"/>
        </div>
        <div>
          <BiLogoGit className="cursor-pointer text-[80px] text-sky-600 
          transition-all duration-300 hover:-translate-y-5 
          sm:text-[100px] md:text-[120px]"/>
        </div>
        <div>
          <BiLogoDocker className="cursor-pointer text-[80px] text-sky-600 
          transition-all duration-300 hover:-translate-y-5 
          sm:text-[100px] md:text-[120px]"/>
        </div>
      </div>
    </div>
  )
}

export default Skills