import { Card, Badge } from "flowbite-react";
import {
  SiSqlite,
  SiMicrosoftexcel,
  SiMicrosoftword,
  SiJupyter,
} from "react-icons/si";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import { FaPython, FaCss3, FaReact, FaLinux } from "react-icons/fa6";
import { RiSvelteLine, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io5";
import { ImHtmlFive } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { FaDocker } from "react-icons/fa";

const SobreMi = () => {
  return (
    <div className="grid grid-cols-1 place-items-center h-auto min-h-[60vh] mb-36">
      <Card className="lg:max-w-[65vw] max-w-[80vw] mt-4">
        <div className="">
          <h3 className="text-blue-500 font-bold md:text-3xl text-xl">
            Sobre Mi
          </h3>
          <div className="border-b-2 border-blue-200 mt-4"></div>
          <p className="text-black md:text-xl text-sm mt-4 text-justify">
            Soy un estudiante de Ingeniería Informática, actualmente matriculado
            en el Máster Universitario en Ciencia Y tecnología Informática de la
            UC3M. Mis intereses dentro del mundo de la informática son amplios,
            ya que me llama la atención el desarrollo de software, el diseño de
            arquitecturas y la transformación digital.
            <br></br>
            <br></br>
            Considero que el trabajo en equipo es la unica forma de construir 
            software de calidad y mantenible. Me definiría como una persona
            proactiva, con ganas de aprender y de participar en el desarrollo
            de algo significativo. Mis compañeros me definirían como una
            persona alegre, trabajadora y comunicativa.
          </p>
        </div>
      </Card>
      <div>
        <h2 className="md:text-3xl text-xl mt-4 mb-8 text-blue-500">
          Aptitudes Informáticas
        </h2>
        <div className="flex flex-wrap gap-2 w-2/3 m-auto ">
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-green-600 text-white" icon={FaPython} > Python </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-blue-500 text-white" icon={BiLogoCPlusPlus} > C++ y C </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-blue-400 text-white" icon={SiSqlite} > SQL </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-blue-400 text-white" icon={SiSqlite} > SQLite </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 px-2 rounded-xl bg-yellow-300 text-black" icon={TbBrandJavascript} > JavaScript </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 px-2 rounded-xl bg-blue-500 text-white" icon={TbBrandTypescript} > TypeScript </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-[#a9df65] text-white" icon={IoLogoNodejs} > Node.js </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-[#ff6332ff] text-white" icon={ImHtmlFive} > HTML5 </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-blue-500 text-white" icon={FaCss3} > CSS3 </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-[#36f3ff] text-black" icon={FaReact} > React </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-[#fb552b] text-white" icon={RiSvelteLine} > Svelte </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-[#26aed8] text-white" icon={RiTailwindCssFill} > Tailwind </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-black text-white" icon={BsGithub} > Github </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-green-600 text-white" icon={SiMicrosoftexcel} > Excel </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-blue-600 text-white" icon={SiMicrosoftword} > Word </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-red-500 text-white" icon={SiMicrosoftword} > PowerPoint </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-[#da5f18] text-white" icon={SiJupyter} > Jupyter Notebook </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-black text-white" icon={FaLinux} > Linux y Unix </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-blue-500 text-white" icon={FaDocker} > Docker </Badge>
          <Badge className="gap-2 md: text-lg text-md font-semibold p-1 rounded-xl bg-blue text-white" icon={FaDocker} > Docker </Badge>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
