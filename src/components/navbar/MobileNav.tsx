import { useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface IProps {
  isOpenMobileNav: boolean
  setIsOpenMobileNav: React.Dispatch<React.SetStateAction<boolean>>
}

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

const MobileNav = ({ isOpenMobileNav, setIsOpenMobileNav }: IProps) => {
  const mobileNavRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (isOpenMobileNav && mobileNavRef.current && !mobileNavRef.current.contains(e.target as Node)) {
        setIsOpenMobileNav(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [isOpenMobileNav, setIsOpenMobileNav])
  
  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.7)] md:hidden block ${isOpenMobileNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} z-30`}>
      <div ref={mobileNavRef} className='fixed top-0 right-0 h-screen w-60 bg-[#282828] p-6'>
        <div className='flex justify-end'>
          <AiOutlineClose onClick={() => setIsOpenMobileNav(false)} className='cursor-pointer text-white text-xl' />
        </div>
        <div className='flex flex-col text-white text-sm gap-6 mt-7'>
          {
            navLinkData.map((item, idx) => (
              <a key={idx} href={item.link} className={`${item.active ? 'opacity-100 font-medium after:scale-x-100' : 'opacity-60 font-normal after:scale-x-0'} w-fit outline-none transition relative hover:opacity-100 hover:font-medium`}>
                {item.title}
              </a>
            ))
          }
        </div>
        <button className='bg-primary text-white rounded-lg w-full py-3 outline-none cursor-pointer text-sm font-medium hover:bg-primary-hover transition mt-8'>
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default MobileNav