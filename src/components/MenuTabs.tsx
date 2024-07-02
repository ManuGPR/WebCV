import { Tabs } from "flowbite-react";
import { HiUserCircle, } from "react-icons/hi"
import { MdOutlineWorkOutline } from "react-icons/md"
import { FaDiagramProject } from "react-icons/fa6";
import { GrDocumentPdf } from "react-icons/gr";

import SobreMi from "./SobreMi";
import Experiencia from "./Experiencia";
import Proyectos from "./Proyectos";
import Curriculum from "./Curriculum";

const MenuTabs = () => {
  return (
    <>
      <Tabs aria-label='Default tabs' variant='default'>
        <Tabs.Item active title="Sobre Mi" icon={HiUserCircle}>
          <SobreMi />
        </Tabs.Item>
        <Tabs.Item title="Experiencia" icon={MdOutlineWorkOutline}>
          <Experiencia />
        </Tabs.Item>
        <Tabs.Item title="Proyectos" icon={FaDiagramProject}>
          <Proyectos />
        </Tabs.Item>
        <Tabs.Item title="Curriculum" icon={GrDocumentPdf}>
          <Curriculum />
        </Tabs.Item>
      </Tabs>
    </>
  )
}

export default MenuTabs