export const Header = () => {
  return (
    <div>
      <header className='bg-[#1da6fc] grid grid-cols-10 place-items-center border-b-8 border-[#1d79fcff]'>
        <div className='md:col-span-3 col-span-4 py-1'>
          <img src='/perfil.jpg' className='rounded-2xl md:h-28 h-16 border-2 border-white'></img>
        </div>
        <div className='md:col-span-7 col-span-6 py-1'>
            <h1 className='text-white lg:text-4xl md:text-3xl text-md'>
                Manuel Gómez-Plana Rodríguez
            </h1>
            <p className='text-white lg:text-2xl md:text-xl text-xs'>
                Estudiante de Ingeniería Informática en la UC3M
            </p>
        </div>
      </header>
    </div>
  )
}

export default Header
