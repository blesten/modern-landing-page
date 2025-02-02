const Information = () => {
  return (
    <div className='relative md:px-24 px-7 md:my-40 mt-24'>
      <img src='/assets/information-abstract-bg.png' alt='Hortes' className='pointer-events-none absolute top-1/2 left-0 -translate-y-1/2' />
      <div>
        <div className='flex lg:flex-row flex-col items-center md:gap-14 gap-10'>
          <div className='flex-1 text-white'>
            <h1 className='font-medium xl:text-6xl lg:text-5xl text-4xl xl:leading-[5.5rem] lg:leading-[4.5rem] leading-[3.5rem]'>Big data requires <br /> understanding <br /> and action</h1>
            <p className='opacity-50 leading-[1.8rem] md:mt-8 mt-5'>The company establishes a connection between its digital products and the results that customers receive to maximize the business value of its digital investments.</p>
          </div>
          <div className='flex-1 w-full'>
            <div className='flex md:flex-row flex-col md:gap-8 gap-5 w-full'>
              <div className='flex-1 relative'>
                <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
                <div className='bg-[#101011] rounded-3xl p-7 text-white'>
                  <p className='font-medium text-5xl'>700B</p>
                  <p className='text-xs opacity-50 mt-3'>Behaviour tracker</p>
                </div>
              </div>
              <div className='flex-1 relative'>
                <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
                <div className='bg-[#101011] rounded-3xl p-7 text-white'>
                  <p className='font-medium text-5xl'>6,000+</p>
                  <p className='text-xs opacity-50 mt-3'>Directed experience</p>
                </div>
              </div>
            </div>
            <div className='flex md:flex-row flex-col md:gap-8 gap-5 md:mt-8 mt-5'>
              <div className='flex-1 relative'>
                <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
                <div className='bg-[#101011] rounded-3xl p-7 text-white'>
                  <p className='font-medium text-5xl'>5,000+</p>
                  <p className='text-xs opacity-50 mt-3'>Completed products</p>
                </div>
              </div>
              <div className='flex-1 relative'>
                <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
                <div className='bg-[#101011] rounded-3xl p-7 text-white'>
                  <p className='font-medium text-5xl'>4,0T+</p>
                  <p className='text-xs opacity-50 mt-3'>Directed experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information