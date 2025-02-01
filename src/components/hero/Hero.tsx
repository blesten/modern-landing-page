import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Hero = () => {
  return (
    <div className='h-screen w-full flex items-center relative px-24 overflow-hidden'>
      <img src='/assets/hero-abstract-bg.png' alt='Hortes' className='pointer-events-none  absolute top-[57%] right-0 -translate-y-1/2' />
      <div className='flex flex-1 items-center mt-14 z-10'>
        <LeftContent />
        <RightContent />
      </div>
    </div>
  )
}

export default Hero