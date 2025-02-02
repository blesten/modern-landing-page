const Additional = () => {
  return (
    <div className='mt-20 md:mb-28 mb-24 md:px-28 px-7 overflow-hidden'>
      <div className='w-full bg-primary rounded-2xl md:py-14 py-8 relative'>
        <div className='overflow-hidden absolute top-0 left-0 rounded-2xl w-full h-full pointer-events-none'>
          <img src='/assets/additional-abstract-bg.png' className='w-full h-full' />
        </div>
        <h1 className='z-10 text-white font-medium md:text-[2.7rem] text-xl text-center md:leading-[3.5rem] leading-[2rem]'>
          Big data analytics <br /> will be used to develop <br /> a thorough understanding <br /> of our customers
        </h1>
        <div className='z-10 flex justify-center md:mt-12 mt-10'>
          <button className='bg-white text-primary rounded-lg px-12 py-3 font-medium outline-none cursor-pointer'>
            Take a Tour
          </button>
        </div>
      </div>
    </div>
  )
}

export default Additional