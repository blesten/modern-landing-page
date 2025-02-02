import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger' 
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const Additional = () => {
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const imgRef = useRef() as React.MutableRefObject<HTMLImageElement>
  const titleRef = useRef() as React.MutableRefObject<HTMLHeadingElement>
  const btnRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: .7,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      imgRef.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: .7,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: -100
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        delay: .1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      btnRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: btnRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  return (
    <div className='mt-20 md:mb-28 mb-24 md:px-28 px-7 overflow-hidden'>
      <div ref={containerRef} className='w-full bg-primary rounded-2xl md:py-14 py-8 relative'>
        <div ref={imgRef} className='overflow-hidden absolute top-0 left-0 rounded-2xl w-full h-full pointer-events-none'>
          <img src='/assets/additional-abstract-bg.png' className='w-full h-full' />
        </div>
        <h1 ref={titleRef} className='z-10 text-white font-medium md:text-[2.7rem] text-xl text-center md:leading-[3.5rem] leading-[2rem]'>
          Big data analytics <br /> will be used to develop <br /> a thorough understanding <br /> of our customers
        </h1>
        <div ref={btnRef} className='z-10 flex justify-center md:mt-12 mt-10'>
          <button className='bg-white text-primary rounded-lg px-12 py-3 font-medium outline-none cursor-pointer'>
            Take a Tour
          </button>
        </div>
      </div>
    </div>
  )
}

export default Additional