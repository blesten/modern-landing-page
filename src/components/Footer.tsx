import { FaDribbble, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6"
import NavLink from "./navbar/NavLink"

const navLinkData = [
  {
    title: 'Why Hortes',
    link: '/',
    active: false
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

const Footer = () => {
  return (
    <div className='px-24 mb-10'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <img src='/assets/logo.png' alt='Hortes' className='w-10' />
          <h1 className='font-medium text-white text-2xl'>Hortes</h1>
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
      </div>
      <hr className='text-white opacity-30 my-8' />
      <div className='flex items-center justify-between'>
        <p className='text-sm text-white opacity-50'>&copy; 2077 Hortes. All rights reserved.</p>
        <div className='flex items-center gap-8 text-white text-xl'>
          <FaTwitter className='cursor-pointer opacity-50 hover:opacity-100 transition' />
          <FaLinkedin className='cursor-pointer opacity-50 hover:opacity-100 transition' />
          <FaFacebook className='cursor-pointer opacity-50 hover:opacity-100 transition' />
          <FaGithub className='cursor-pointer opacity-50 hover:opacity-100 transition' />
          <FaDribbble className='cursor-pointer opacity-50 hover:opacity-100 transition' />
        </div>
      </div>
    </div>
  )
}

export default Footer