import { useState, useEffect } from 'react'
import NavLink from './NavLink'

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

  return (
    <div className={`fixed top-0 w-full py-6 px-24 flex items-center justify-between z-20 transition ${isScrolled ? 'bg-[#050505]' : 'bg-transparent'}`}>
      <div className='flex items-center gap-3'>
        <img src='/assets/logo.png' alt='Hortes' className='w-10 h-10' />
        <h1 className='font-semibold text-white text-2xl'>Hortes</h1>
      </div>
      <div className='text-white text-sm flex items-center gap-10'>
        {
          navLinkData.map((item, idx) => (
            <NavLink
              key={idx}
              title={item.title}
              link={item.link}
              active={item.active}
            />
          ))
        }
      </div>
      <button className='bg-primary text-white rounded-lg px-6 py-3 outline-none cursor-pointer text-sm font-medium hover:bg-primary-hover transition'>Sign Up</button>
    </div>
  )
}

export default Navbar