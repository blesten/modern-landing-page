import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const Information = () => {
  const imgRef = useRef() as React.MutableRefObject<HTMLImageElement>
  const titleRef = useRef() as React.MutableRefObject<HTMLHeadingElement>
  const descriptionRef = useRef() as React.MutableRefObject<HTMLParagraphElement>
  const firstDataRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const secondDataRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const thirdDataRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const forthDataRef = useRef() as React.MutableRefObject<HTMLDivElement>

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
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      }
    )

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
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
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
        delay: .1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      firstDataRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        delay: .2,
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
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        delay: .3,
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
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        delay: .4,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: thirdDataRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )
    
    gsap.fromTo(
      forthDataRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        delay: .5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: forthDataRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  return (
    <div className='relative md:px-24 px-7 md:my-40 mt-24'>
      <img ref={imgRef} src='/assets/information-abstract-bg.png' alt='Hortes' className='pointer-events-none absolute top-1/2 left-0 -translate-y-1/2' />
      <div>
        <div className='flex lg:flex-row flex-col items-center md:gap-14 gap-10'>
          <div className='flex-1 text-white'>
            <h1 ref={titleRef} className='font-medium xl:text-6xl lg:text-5xl text-4xl xl:leading-[5.5rem] lg:leading-[4.5rem] leading-[3.5rem]'>Big data requires <br /> understanding <br /> and action</h1>
            <p ref={descriptionRef} className='opacity-50 leading-[1.8rem] md:mt-8 mt-5'>The company establishes a connection between its digital products and the results that customers receive to maximize the business value of its digital investments.</p>
          </div>
          <div className='flex-1 w-full'>
            <div className='flex md:flex-row flex-col md:gap-8 gap-5 w-full'>
              <div ref={firstDataRef} className='flex-1 relative'>
                <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
                <div className='bg-[#101011] rounded-3xl p-7 text-white'>
                  <p className='font-medium text-5xl'>700B</p>
                  <p className='text-xs opacity-50 mt-3'>Behaviour tracker</p>
                </div>
              </div>
              <div ref={secondDataRef} className='flex-1 relative'>
                <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
                <div className='bg-[#101011] rounded-3xl p-7 text-white'>
                  <p className='font-medium text-5xl'>6,000+</p>
                  <p className='text-xs opacity-50 mt-3'>Directed experience</p>
                </div>
              </div>
            </div>
            <div className='flex md:flex-row flex-col md:gap-8 gap-5 md:mt-8 mt-5'>
              <div ref={thirdDataRef} className='flex-1 relative'>
                <div className='absolute inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
                <div className='bg-[#101011] rounded-3xl p-7 text-white'>
                  <p className='font-medium text-5xl'>5,000+</p>
                  <p className='text-xs opacity-50 mt-3'>Completed products</p>
                </div>
              </div>
              <div ref={forthDataRef} className='flex-1 relative'>
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