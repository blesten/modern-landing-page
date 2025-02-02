const Additional = () => {
  return (
    <div className='mt-20 mb-28 px-28 overflow-hidden'>
      <div className='w-full bg-primary rounded-2xl py-14 relative'>
        <div className='overflow-hidden absolute top-0 left-0 rounded-2xl w-full h-full'>
          <img src='/assets/additional-abstract-bg.png' className='pointer-events-none w-full h-full' />
        </div>
        <h1 className='text-white font-medium text-[2.7rem] text-center leading-[3.5rem]'>
          Big data analytics <br /> will be used to develop <br /> a thorough understanding <br /> of our customers
        </h1>
        <div className='flex justify-center mt-12'>
          <button className='bg-white text-primary rounded-lg px-12 py-3 font-medium outline-none cursor-pointer'>
            Take a Tour
          </button>
        </div>
      </div>
    </div>
  )
}

export default Additional