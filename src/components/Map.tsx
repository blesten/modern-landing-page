const Map = () => {
  return (
    <div className='md:mt-56 mt-24 md:mb-40 mb-24 md:px-24 px-7'>
      <h1 className='text-white font-medium md:text-5xl text-4xl md:text-center md:leading-[4.5rem] leading-[3.5rem]'>Used by a large number <br className='md:block hidden' /> of uses around the world</h1>
      <div className='relative'>
        <img src='/assets/map.png' alt='Hortes' className='md:mt-24 mt-10' />
        <div>
          <img src='/assets/avatar-1.png' alt='Hortes' className='absolute lg:top-20 lg:left-20 top-5 left-5 lg:w-auto w-10' />
          <img src='/assets/avatar-2.png' alt='Hortes' className='absolute lg:top-72 lg:left-44 top-16 left-16 lg:w-auto w-10' />
          <img src='/assets/avatar-3.png' alt='Hortes' className='absolute lg:top-2 lg:left-80 top-2 right-0 lg:w-auto w-10' />
          <img src='/assets/avatar-4.png' alt='Hortes' className='absolute lg:top-40 lg:left-2/5 top-20 left-1/3 lg:w-auto w-10' />
          <img src='/assets/avatar-5.png' alt='Hortes' className='absolute lg:top-40 lg:right-80 top-2 right-56 lg:w-auto w-10' />
          <img src='/assets/avatar-6.png' alt='Hortes' className='absolute lg:top-14 lg:right-40 top-8 right-32 lg:w-auto w-10' />
          <img src='/assets/avatar-7.png' alt='Hortes' className='absolute bottom-5 right-10 lg:w-auto w-10' />
        </div>
      </div>
    </div>
  )
}

export default Map