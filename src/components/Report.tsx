import { useEffect, useRef } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const Report = () => {
  const imgRef = useRef() as React.MutableRefObject<HTMLImageElement>
  const titleRef = useRef() as React.MutableRefObject<HTMLHeadingElement>
  const firstDataRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const secondDataRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const thirdDataRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const forthDataRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const fifthDataRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const sixthDataRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const seventhDataRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const eightDataRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: .4,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      firstDataRef.current,
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: .4,
        delay: .1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: firstDataRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      secondDataRef.current,
      {
        opacity: 0,
        x: 50
      },
      {
        opacity: 1,
        x: 0,
        duration: .4,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: secondDataRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      thirdDataRef.current,
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: .4,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: thirdDataRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      forthDataRef.current,
      {
        opacity: 0,
        x: 50
      },
      {
        opacity: 1,
        x: 0,
        duration: .4,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: forthDataRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      fifthDataRef.current,
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: .4,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: fifthDataRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      sixthDataRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: sixthDataRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      seventhDataRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: seventhDataRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      eightDataRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: eightDataRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  return (
    <div className='relative md:my-40 mt-24 md:px-24 px-7'>
      <img ref={imgRef} src='/assets/report-abstract-bg.png' alt='Hortes' className='pointer-events-none absolute -top-64 left-1/2 -translate-x-1/2 w-[90%]' />
      <div>
        <h1 ref={titleRef} className='text-white font-medium md:text-5xl text-4xl md:text-center md:leading-[4.5rem] leading-[3.9rem]'>Reports to answer <br /> any question</h1>
        <div className='md:mt-20 mt-12'>
          <div className='flex md:flex-row flex-col md:gap-10 gap-7'>
            <div ref={firstDataRef} className='relative flex-1'>
              <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
              <div className='bg-[#101011] rounded-3xl md:p-10 p-7 text-white flex flex-col h-full'>
                <div className='flex-1 md:pb-0 pb-24'>
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
            <div ref={secondDataRef} className='relative flex-1'>
              <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
              <div className='bg-[#101011] rounded-3xl px-5 pt-16 pb-5 text-white'>
                <h1 className='font-medium text-3xl text-center'>78,50K Users</h1>
                <img src='/assets/report-bar-chart.png' alt='Hortes' className='pointer-events-none m-auto w-[90%] mt-2' />
              </div>
            </div>
          </div>
          <div className='md:mt-10 mt-7 flex md:flex-row flex-col-reverse md:gap-10 gap-7'>
            <div ref={thirdDataRef} className='relative flex-1'>
              <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
              <div className='bg-[#101011] rounded-3xl text-white h-full flex flex-col'>
                <div className='flex-1 md:p-10 p-7'>
                  <p className='opacity-50 text-sm'>Last year</p>
                  <h1 className='font-medium text-3xl mt-4'>78,50K Users</h1>
                </div>
                <img src='/assets/report-line-chart-1.png' alt='Hortes' className='pointer-events-none m-auto mb-7' />
              </div>
            </div>
            <div ref={forthDataRef} className='relative flex-1'>
              <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
              <div className='bg-[#101011] rounded-3xl md:p-10 p-7 text-white flex flex-col h-full'>
                <div className='flex-1 md:pb-0 pb-24'>
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
          <div className='flex md:flex-row flex-col md:gap-10 gap-7 md:mt-10 mt-7'>
            <div ref={fifthDataRef} className='relative flex-1'>
              <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
              <div className='bg-[#101011] rounded-3xl md:p-10 p-7 text-white flex flex-col h-full'>
                <div className='flex-1 md:pb-0 pb-24'>
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
              <div ref={sixthDataRef} className='relative'>
                <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
                <div className='bg-[#101011] rounded-3xl p-7 text-white flex xl:flex-row flex-col xl:items-center gap-10 justify-between'>
                  <div>
                    <h2 className='font-medium'>05 - Racer</h2>
                    <p className='opacity-50 text-sm mt-3'>Retained on and after month</p>
                    <p className='font-semibold mt-3 text-xl'>User xJy34.56</p>
                  </div>
                  <img src='/assets/report-line-chart-2.png' alt='Hortes' className='pointer-events-none' />
                </div>
              </div>
              <div ref={seventhDataRef} className='relative'>
                <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
                <div className='bg-[#101011] rounded-3xl p-7 text-white flex xl:flex-row flex-col xl:items-center gap-10 justify-between'>
                  <div>
                    <h2 className='font-medium'>02 - Racer</h2>
                    <p className='opacity-50 text-sm mt-3'>Retained on and after month</p>
                    <p className='font-semibold mt-3 text-xl'>User xJy34.56</p>
                  </div>
                  <img src='/assets/report-line-chart-3.png' alt='Hortes' className='pointer-events-none' />
                </div>
              </div>
              <div ref={eightDataRef} className='relative'>
                <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
                <div className='bg-[#101011] rounded-3xl p-7 text-white flex xl:flex-row flex-col xl:items-center gap-10 justify-between'>
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