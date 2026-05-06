import { Card, Button } from "flowbite-react";

const Proyectos = () => {
  return (
    <div className='grid grid-cols-1 place-items-center h-auto min-h-[60vh] mb-36'>
      <Card className='lg:max-w-[65vw] max-w-[80vw] mt-4'>
        <div className=''>
          <h3 className='text-blue-500 font-bold md:text-3xl text-xl'>
            Proyecto de Fin de Grado
          </h3>
          <div className='border-b-2 border-blue-200 mt-4'></div>
          <div className='grid md:grid-cols-2 grid-cols-1 place-items-center'>
            <p className='text-black md:text-xl text-sm mt-4 text-center'>
              Este es mi TFG, titulado "Desarrollo de un simulador de sistemas de ficheros para entornos distribuidos y paralelos". Este proyecto utiliza el framework SimGrid para simular el comportamiento de un sistema de ficheros distribuido en una plataforma personalizable por el usuario.<br /><br />

              Este sistema permite realizar simulaciones sobre una plataforma descrita por clientes y servidores, que se pueden agrupar en clústeres para realizar experimentos a una mayor escala. Adicionalmente, el usuario puede elegir entre políticas de acceso que determinan el comportamiento de los clientes. La herramienta cuenta con interfaces para modificar toda esta información de manera intuitiva, fiable y rápida.<br /><br />

              Además, el usuario podrá definir las operaciones que los clientes enviarán a los servidores distribuidos. Tras ejecutar la simulación, el usuario podrá ver información relacionada con el consumo energético y temporal de los elementos de la simulación, alineándose así con los objetivos ODS. Como funcionalidad extra, el sistema genera automáticamente gráficas que resumen toda esta información.
            </p>
            <div className="p-6">
              <div onClick={() => {window.open("/TFG.pdf", '_blank');}} className='border-blue-500 border-2'> 
                <img src='/TFG.png'></img>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card className='lg:max-w-[65vw] max-w-[80vw] mt-4'>
        <div className=''>
          <h3 className='text-blue-500 font-bold md:text-3xl text-xl'>
            Proyectos de Universidad
          </h3>
          <div className='border-b-2 border-blue-200 mt-4'></div>
          <div className='grid md:grid-cols-2 grid-cols-1 place-items-center'>
            <a className='p-2 md:order-1 order-2' href="https://github.com/ManuGPR/University_Projects">
              <div className="border-blue-500 border-2">
                <img src='/UniversityProjects.png'></img>
              </div>
            </a>
            <p className='text-black md:text-xl text-sm mt-4 text-center md:order-2 order-1'>
              Repositorio con enlaces a algunos proyectos realizados durante la carrera.
              <br /><br />
              <a className='text-blue-500 underline' href="https://github.com/ManuGPR/University_Projects">Accede aqui</a>
            </p>
          </div>
        </div>
      </Card>
      <Card className='lg:max-w-[65vw] max-w-[80vw] mt-4'>
        <div className=''>
          <h3 className='text-blue-500 font-bold md:text-3xl text-xl'>
            Página web Delegación EPS-UC3M
          </h3>
          <div className='border-b-2 border-blue-200 mt-4'></div>
          <div className='grid md:grid-cols-2 grid-cols-1 place-items-center'>
            <p className='text-black md:text-xl text-sm mt-4 text-center'>
            Esta web sirve para presentar y gestionar los servicios ofrecidos por la delegación de estudiantes de la Universidad Carlos III de Madrid en el campus de Leganés. Este proyecto contiene un front-end desarrollado en Svelte con Google OAuth, un back-end desarrollado en Go que expone sus servicios mediante un contenedor de Docker y una comunicación autenticada mediante una API Rest.
              <br /><br />
              <a className='text-blue-500 underline' href='https://servicios-dele.uc3m.es/'>Accede aquí</a>
            </p>
            <a className='p-2' href="https://servicios-delegacion.uc3m.es/">
              <div className="border-blue-500 border-2">
                <img src='/DeleWeb.png'></img>
              </div>
            </a>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Proyectos
