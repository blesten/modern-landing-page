import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const LeftContent = () => {
  const titleRef = useRef() as React.MutableRefObject<HTMLHeadingElement>
  const descriptionRef = useRef() as React.MutableRefObject<HTMLParagraphElement>
  const btnRef = useRef() as React.MutableRefObject<HTMLButtonElement>

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: .4,
        delay: .2,
        ease: 'power2.inOut'
      }
    )

    gsap.fromTo(
      descriptionRef.current,
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: .5,
        x: 0,
        duration: .4,
        delay: .3,
        ease: 'power2.inOut'
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
        delay: .4,
        ease: 'power2.inOut'
      }
    )
  }, [])

  return (
    <div className='flex-1 md:mt-0 mt-12'>
      <h1 ref={titleRef} className='xl:leading-[6.7rem] lg:leading-[5rem] leading-[3.5rem] text-white font-semibold xl:text-[4.5rem] lg:text-5xl text-4xl'>Product analytics <br className='xl:block hidden' /> to <br className='xl:hidden block' /> help you grow</h1>
      <p ref={descriptionRef} className='md:mt-5 mt-3 text-white opacity-50 leading-[2rem]'>Powerful product analytics to help you <br /> convert, engage, and retain more users</p>
      <button ref={btnRef} className='md:mt-10 mt-8 py-3 px-8 bg-primary hover:bg-primary-hover text-white outline-none transition text-sm font-medium rounded-lg cursor-pointer'>
        Take a Tour
      </button>
    </div>
  )
}

export default LeftContent