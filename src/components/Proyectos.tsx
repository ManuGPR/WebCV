import React from 'react'
import { Card, Badge } from "flowbite-react";

const Proyectos = () => {
  return (
    <div className='grid grid-cols-1 place-items-center h-auto min-h-[60vh] mb-36'>
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
            Página web delegación - Prerelease
          </h3>
          <div className='border-b-2 border-blue-200 mt-4'></div>
          <div className='grid md:grid-cols-2 grid-cols-1 place-items-center'>
            <p className='text-black md:text-xl text-sm mt-4 text-center'>
              Página web realizada para la delegación de estudiantes de la EPS de la UC3M.
              Cuenta con autenticación de usuario, frontend hecho en Svelte TS y backend en C++.
              <br /><br />
              <a className='text-blue-500 underline' href='https://taquillas.astrak.es/'>Accede aquí</a>
            </p>
            <a className='p-2' href="https://taquillas.astrak.es/">
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
