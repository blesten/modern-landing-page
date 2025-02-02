import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Hero = () => {
  return (
    <div className='md:h-screen w-full flex md:items-center relative md:px-24 px-7'>
      <img src='/assets/hero-abstract-bg.png' alt='Hortes' className='pointer-events-none absolute top-[57%] right-0 -translate-y-1/2' />
      <div className='flex md:flex-row flex-col flex-1 md:items-center mt-14 z-10 gap-10'>
        <LeftContent />
        <RightContent />
      </div>
    </div>
  )
}

export default Hero