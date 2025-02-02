const Information = () => {
  return (
    <div className='relative px-24 my-40'>
      <img src='/assets/information-abstract-bg.png' alt='Hortes' className='pointer-events-none absolute top-1/2 left-0 -translate-y-1/2' />
      <div>
        <div className='flex items-center gap-14'>
          <div className='flex-1 text-white'>
            <h1 className='font-medium text-6xl leading-[5.5rem]'>Big data requires <br /> understanding <br /> and action</h1>
            <p className='opacity-50 leading-[1.8rem] mt-8'>The company establishes a connection between its digital products and the results that customers receive to maximize the business value of its digital investments.</p>
          </div>
          <div className='flex-1'>
            <div className='flex gap-8'>
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
            <div className='flex gap-8 mt-8'>
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