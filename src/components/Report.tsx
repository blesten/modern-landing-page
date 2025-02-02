import { FaArrowRightLong } from "react-icons/fa6"

const Report = () => {
  return (
    <div className='relative my-40 px-24'>
      <img src='/assets/report-abstract-bg.png' alt='Hortes' className='pointer-events-none absolute -top-64 left-1/2 -translate-x-1/2 w-[90%]' />
      <div>
        <h1 className='text-white font-medium text-5xl text-center leading-[4.5rem]'>Reports to answer <br /> any question</h1>
        <div className='mt-20'>
          <div className='flex gap-10'>
            <div className='relative flex-1'>
              <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
              <div className='bg-[#101011] rounded-3xl p-10 text-white flex flex-col h-full'>
                <div className='flex-1'>
                  <img src='/assets/pointer.png' alt='Hortes' className='w-12 pointer-events-none' />
                </div>
                <div>
                  <h2 className='text-2xl font-medium leading-[2.5rem]'>What is my product&apos;s <br /> current audience?</h2>
                  <div className='text-primary cursor-pointer mt-5 w-fit flex items-center gap-3 hover:text-primary-hover transition'>
                    <p className='font-medium text-sm'>See All</p>
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>
            </div>
            <div className='relative flex-1'>
              <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
              <div className='bg-[#101011] rounded-3xl px-5 pt-16 pb-5 text-white'>
                <h1 className='font-medium text-3xl text-center'>78,50K Users</h1>
                <img src='/assets/report-bar-chart.png' alt='Hortes' className='pointer-events-none m-auto w-[90%] mt-2' />
              </div>
            </div>
          </div>
          <div className='mt-10 flex gap-10'>
            <div className='relative flex-1'>
              <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
              <div className='bg-[#101011] rounded-3xl text-white h-full flex flex-col'>
                <div className='flex-1 p-10'>
                  <p className='opacity-50 text-sm'>Last year</p>
                  <h1 className='font-medium text-3xl mt-4'>78,50K Users</h1>
                </div>
                <img src='/assets/report-line-chart-1.png' alt='Hortes' className='pointer-events-none m-auto mb-7' />
              </div>
            </div>
            <div className='relative flex-1'>
              <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
              <div className='bg-[#101011] rounded-3xl p-10 text-white flex flex-col h-full'>
                <div className='flex-1'>
                  <img src='/assets/chart.png' alt='Hortes' className='w-12 pointer-events-none' />
                </div>
                <div>
                  <h2 className='text-2xl font-medium leading-[2.5rem]'>When and why users <br /> disappear?</h2>
                  <div className='text-primary cursor-pointer mt-5 w-fit flex items-center gap-3 hover:text-primary-hover transition'>
                    <p className='font-medium text-sm'>See All</p>
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-10 mt-10'>
            <div className='relative flex-1'>
              <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
              <div className='bg-[#101011] rounded-3xl p-10 text-white flex flex-col h-full'>
                <div className='flex-1'>
                  <img src='/assets/eye.png' alt='Hortes' className='w-12 pointer-events-none' />
                </div>
                <div>
                  <h2 className='text-2xl font-medium leading-[2.5rem]'>Which users are currently <br /> exhibiting the highest <br /> retention rate?</h2>
                  <div className='text-primary cursor-pointer mt-5 w-fit flex items-center gap-3 hover:text-primary-hover transition'>
                    <p className='font-medium text-sm'>See All</p>
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-5 flex-1'>
              <div className='relative'>
                <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
                <div className='bg-[#101011] rounded-3xl p-7 text-white flex items-center gap-10 justify-between'>
                  <div>
                    <h2 className='font-medium'>05 - Racer</h2>
                    <p className='opacity-50 text-sm mt-3'>Retained on and after month</p>
                    <p className='font-semibold mt-3 text-xl'>User xJy34.56</p>
                  </div>
                  <img src='/assets/report-line-chart-2.png' alt='Hortes' className='pointer-events-none' />
                </div>
              </div>
              <div className='relative'>
                <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
                <div className='bg-[#101011] rounded-3xl p-7 text-white flex items-center gap-10 justify-between'>
                  <div>
                    <h2 className='font-medium'>02 - Racer</h2>
                    <p className='opacity-50 text-sm mt-3'>Retained on and after month</p>
                    <p className='font-semibold mt-3 text-xl'>User xJy34.56</p>
                  </div>
                  <img src='/assets/report-line-chart-3.png' alt='Hortes' className='pointer-events-none' />
                </div>
              </div>
              <div className='relative'>
                <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
                <div className='bg-[#101011] rounded-3xl p-7 text-white flex items-center gap-10 justify-between'>
                  <div>
                    <h2 className='font-medium'>07 - Racer</h2>
                    <p className='opacity-50 text-sm mt-3'>Retained on and after month</p>
                    <p className='font-semibold mt-3 text-xl'>User xJy34.56</p>
                  </div>
                  <img src='/assets/report-line-chart-4.png' alt='Hortes' className='pointer-events-none' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report