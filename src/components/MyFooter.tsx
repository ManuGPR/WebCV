import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { Footer } from "flowbite-react";


const MyFooter = () => {
  return (
    <div>
      <Footer container>
        <Footer.Copyright href="#" by="Manuel Gómez-Plana Rodríguez" year={2024} className="sm:text-lg text-sm"/>
        <div className="grid grid-cols-3 place-items-center md:w-1/4 w-full">
            <Footer.Title title="Contacto" className="col-span-3"/>
            <Footer.Icon href="https://mail.google.com/mail/?view=cm&fs=1&to=manuelgpr10@gmail.com" icon={MdOutlineEmail} className="text-red-500"/>
            <Footer.Icon href="https://www.linkedin.com/in/manuelgpr" icon={BsLinkedin} className="text-blue-500"/>
            <Footer.Icon href="https://github.com/ManuGPR/" icon={BsGithub} />
        </div>
      </Footer>
    </div>
  )
}

export default MyFooter
