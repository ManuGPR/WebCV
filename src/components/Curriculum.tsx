import { Button } from "flowbite-react";

const Curriculum = () => {  
  return (
    <div className='min-h-[70vh]'>
      <p className='text-xl text-blue-500 my-6'>
        Si quieres ver mi curriculum, haz click en uno de los siguientes botones:
      </p>
      <div className='grid grid-cols-1 place-items-center w-screen m-auto'>
        <Button onClick={() => {window.open("/CV.pdf", '_blank');}} className='bg-blue-500 md:w-1/3 w-4/5 py-2 mb-2'>
          <p className='text-xl'>
            Ver Curriculum en Español
          </p>
        </Button>
        <Button onClick={() => {window.open("/CV_ENG.pdf", '_blank');}} className='bg-blue-500 md:w-1/3 w-4/5 py-2'>
          <p className='text-xl'>
            Ver Curriculum en Inglés
          </p>
        </Button>
      </div>
    </div>
  )
}

export default Curriculum
