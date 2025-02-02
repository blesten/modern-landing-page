import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const Map = () => {
  const titleRef = useRef() as React.MutableRefObject<HTMLHeadingElement>
  const mapRef = useRef() as React.MutableRefObject<HTMLImageElement>
  const firstAvatarRef = useRef() as React.MutableRefObject<HTMLImageElement>
  const secondAvatarRef = useRef() as React.MutableRefObject<HTMLImageElement>
  const thirdAvatarRef = useRef() as React.MutableRefObject<HTMLImageElement>
  const forthAvatarRef = useRef() as React.MutableRefObject<HTMLImageElement>
  const fifthAvatarRef = useRef() as React.MutableRefObject<HTMLImageElement>
  const sixthAvatarRef = useRef() as React.MutableRefObject<HTMLImageElement>
  const seventhAvatarRef = useRef() as React.MutableRefObject<HTMLImageElement>

  useEffect(() => {
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
      mapRef.current,
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
          trigger: mapRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      firstAvatarRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: firstAvatarRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      secondAvatarRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        ease: 'power2.in',
        delay: .2,
        scrollTrigger: {
          trigger: secondAvatarRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      thirdAvatarRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        ease: 'power2.in',
        delay: .4,
        scrollTrigger: {
          trigger: thirdAvatarRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      forthAvatarRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        ease: 'power2.in',
        delay: .6,
        scrollTrigger: {
          trigger: forthAvatarRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      fifthAvatarRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        ease: 'power2.in',
        delay: .8,
        scrollTrigger: {
          trigger: fifthAvatarRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      sixthAvatarRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        ease: 'power2.in',
        delay: 1,
        scrollTrigger: {
          trigger: sixthAvatarRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      seventhAvatarRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        ease: 'power2.in',
        delay: 1.2,
        scrollTrigger: {
          trigger: seventhAvatarRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  return (
    <div className='md:mt-56 mt-24 md:mb-40 mb-24 md:px-24 px-7'>
      <h1 ref={titleRef} className='text-white font-medium md:text-5xl text-4xl md:text-center md:leading-[4.5rem] leading-[3.5rem]'>Used by a large number <br className='md:block hidden' /> of uses around the world</h1>
      <div className='relative'>
        <img ref={mapRef} src='/assets/map.png' alt='Hortes' className='md:mt-24 mt-10' />
        <div>
          <img ref={firstAvatarRef} src='/assets/avatar-1.png' alt='Hortes' className='absolute lg:top-20 lg:left-20 top-5 left-5 lg:w-auto w-10' />
          <img ref={secondAvatarRef} src='/assets/avatar-2.png' alt='Hortes' className='absolute lg:top-72 lg:left-44 top-16 left-16 lg:w-auto w-10' />
          <img ref={thirdAvatarRef} src='/assets/avatar-3.png' alt='Hortes' className='absolute lg:top-2 lg:left-80 top-2 right-0 lg:w-auto w-10' />
          <img ref={forthAvatarRef} src='/assets/avatar-4.png' alt='Hortes' className='absolute lg:top-40 lg:left-2/5 top-20 left-1/3 lg:w-auto w-10' />
          <img ref={fifthAvatarRef} src='/assets/avatar-5.png' alt='Hortes' className='absolute lg:top-40 lg:right-80 top-2 right-56 lg:w-auto w-10' />
          <img ref={sixthAvatarRef} src='/assets/avatar-6.png' alt='Hortes' className='absolute lg:top-14 lg:right-40 top-8 right-32 lg:w-auto w-10' />
          <img ref={seventhAvatarRef} src='/assets/avatar-7.png' alt='Hortes' className='absolute bottom-5 right-10 lg:w-auto w-10' />
        </div>
      </div>
    </div>
  )
}

export default Map