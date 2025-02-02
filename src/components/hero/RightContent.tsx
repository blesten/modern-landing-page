import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const RightContent = () => {
  const cardRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const titleRef = useRef() as React.MutableRefObject<HTMLHeadingElement>
  const firstDataRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const secondDataRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const chartRef = useRef() as React.MutableRefObject<HTMLImageElement>
  const monthRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const firstCountryRef = useRef() as React.MutableRefObject<HTMLTableRowElement>
  const secondCountryRef = useRef() as React.MutableRefObject<HTMLTableRowElement>

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: .4,
        delay: .5,
        ease: 'power2.inOut'
      }
    )

    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        delay: .6,
        ease: 'power2.inOut'
      }
    )

    gsap.fromTo(
      firstDataRef.current,
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        delay: .7,
        ease: 'power2.inOut'
      }
    )

    gsap.fromTo(
      secondDataRef.current,
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        delay: .8,
        ease: 'power2.inOut'
      }
    )

    gsap.fromTo(
      chartRef.current,
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        delay: .9,
        ease: 'power2.inOut'
      }
    )

    gsap.fromTo(
      monthRef.current,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: .5,
        y: 0,
        duration: .4,
        delay: .9,
        ease: 'power2.inOut'
      }
    )

    gsap.fromTo(
      firstCountryRef.current,
      {
        opacity: 0,
        x: -20
      },
      {
        opacity: 1,
        x: 0,
        duration: .4,
        delay: 1,
        ease: 'power2.inOut'
      }
    )

    gsap.fromTo(
      secondCountryRef.current,
      {
        opacity: 0,
        x: -20
      },
      {
        opacity: 1,
        x: 0,
        duration: .4,
        delay: 1.1,
        ease: 'power2.inOut'
      }
    )
  }, [])
  
  return (
    <div className='flex-1 md:mt-0 mt-10'>
      <div ref={cardRef} className='relative'>
        <div className='absolute xl:w-2/3 w-full justify-self-end inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
        <div className='bg-[#101011] rounded-3xl p-7 xl:w-2/3 w-full justify-self-end'>
          <h2 ref={titleRef} className='text-white font-medium text-lg'>New user preferences</h2>
          <div className='flex items-center justify-between mt-7'>
            <div ref={firstDataRef}>
              <p className='text-white opacity-40 text-sm'>Growth percentage</p>
              <p className='text-white text-5xl font-semibold mt-3'>85%</p>
            </div>
            <div ref={secondDataRef}>
              <p className='text-white opacity-40 text-sm'>Unique, last 30 days</p>
              <p className='text-white text-5xl font-semibold mt-3'>74.87K</p>
            </div>
          </div>
          <div className='mt-9'>
            <img ref={chartRef} src='/assets/hero-chart.png' alt='Hortes' className='pointer-events-none' />
            <div ref={monthRef} className='flex items-center justify-between text-xs text-white opacity-50 mt-6'>
              <p>Mar 1</p>
              <p>Mar 2</p>
              <p>Mar 3</p>
              <p>Mar 4</p>
              <p>Mar 5</p>
              <p>Mar 6</p>
            </div>
          </div>
          <table className='mt-6 w-full'>
            <tr ref={firstCountryRef} className='text-white'>
              <td className='py-2 flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-primary' />
                <p className='font-medium'>United States</p>
              </td>
              <td className='opacity-50 text-sm px-4'>44,054</td>
              <td className='opacity-50 text-sm px-4'>48%</td>
              <td>
                <HiOutlineDotsHorizontal className='opacity-50' />
              </td>
            </tr>
            <tr ref={secondCountryRef} className='text-white'>
              <td className='py-2 flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-[#008AEA]' />
                <p className='font-medium'>France</p>
              </td>
              <td className='opacity-50 text-sm px-4'>35,085</td>
              <td className='opacity-50 text-sm px-4'>56%</td>
              <td>
                <HiOutlineDotsHorizontal className='opacity-50' />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default RightContent