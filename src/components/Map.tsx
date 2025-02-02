const Map = () => {
  return (
    <div className='mt-56 mb-40 px-24'>
      <h1 className='text-white font-medium text-5xl text-center leading-[4.5rem]'>Used by a large number <br /> of uses around the world</h1>
      <div className='relative'>
        <img src='/assets/map.png' alt='Hortes' className='mt-24' />
        <div>
          <img src='/assets/avatar-1.png' alt='Hortes' className='absolute top-20 left-20' />
          <img src='/assets/avatar-2.png' alt='Hortes' className='absolute top-72 left-44' />
          <img src='/assets/avatar-3.png' alt='Hortes' className='absolute top-2 left-80' />
          <img src='/assets/avatar-4.png' alt='Hortes' className='absolute top-40 left-2/5' />
          <img src='/assets/avatar-5.png' alt='Hortes' className='absolute top-40 right-80' />
          <img src='/assets/avatar-6.png' alt='Hortes' className='absolute top-14 right-40' />
          <img src='/assets/avatar-7.png' alt='Hortes' className='absolute bottom-5 right-10' />
        </div>
      </div>
    </div>
  )
}

export default Map