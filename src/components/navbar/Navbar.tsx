import { useState, useEffect, useRef } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import MobileNav from './MobileNav'
import NavLink from './NavLink'
import gsap from 'gsap'

const navLinkData = [
  {
    title: 'Why Hortes',
    link: '/',
    active: true
  },
  {
    title: 'Solution',
    link: '/',
    active: false
  },
  {
    title: 'Resource',
    link: '/',
    active: false
  },
  {
    title: 'Pricing',
    link: '/',
    active: false
  }
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)

  const logoRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const btnRef = useRef() as React.MutableRefObject<HTMLButtonElement>
  const navLinkRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const burgerRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        ease: 'power2.inOut'
      }
    )

    gsap.fromTo(
      navLinkRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        delay: .1,
        ease: 'power2.inOut'
      }
    )

    gsap.fromTo(
      burgerRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        delay: .1,
        ease: 'power2.inOut'
      }
    )

    gsap.fromTo(
      btnRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: .4,
        delay: .2,
        ease: 'power2.inOut'
      }
    )
  }, [])

  return (
    <>
      <div className={`fixed top-0 w-full py-6 md:px-24 px-7 flex items-center justify-between z-20 transition ${isScrolled ? 'bg-[#050505]' : 'bg-transparent'}`}>
        <div ref={logoRef} className='flex items-center gap-3'>
          <img src='/assets/logo.png' alt='Hortes' className='w-10 h-10' />
          <h1 className='font-semibold text-white text-2xl'>Hortes</h1>
        </div>
        <div ref={navLinkRef} className='md:flex hidden text-white text-sm items-center gap-10'>
          {
            navLinkData.map((item, idx) => (
              <NavLink
                key={idx}
                title={item.title}
                link={item.link}
                active={item.active}
                isUnderlineHover={true}
              />
            ))
          }
        </div>
        <button ref={btnRef} className='md:block hidden bg-primary text-white rounded-lg px-6 py-3 outline-none cursor-pointer text-sm font-medium hover:bg-primary-hover transition'>Sign Up</button>
        <div ref={burgerRef} onClick={() => setIsOpenMobileNav(true)} className='bg-[#282828] p-3 rounded-md md:hidden block cursor-pointer'>
          <RxHamburgerMenu className='text-white text-2xl' />
        </div>
      </div>

      <MobileNav
        isOpenMobileNav={isOpenMobileNav}
        setIsOpenMobileNav={setIsOpenMobileNav}
      />
    </>
  )
}

export default Navbar