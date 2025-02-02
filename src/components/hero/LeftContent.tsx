const LeftContent = () => {
  return (
    <div className='flex-1 md:mt-0 mt-12'>
      <h1 className='xl:leading-[6.7rem] lg:leading-[5rem] leading-[3.5rem] text-white font-semibold xl:text-[4.5rem] lg:text-5xl text-4xl'>Product analytics <br className='xl:block hidden' /> to <br className='xl:hidden block' /> help you grow</h1>
      <p className='md:mt-5 mt-3 text-white opacity-50 leading-[2rem]'>Powerful product analytics to help you <br /> convert, engage, and retain more users</p>
      <button className='md:mt-10 mt-8 py-3 px-8 bg-primary hover:bg-primary-hover text-white outline-none transition text-sm font-medium rounded-lg cursor-pointer'>
        Take a Tour
      </button>
    </div>
  )
}

export default LeftContent