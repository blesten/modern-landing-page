import { HiOutlineDotsHorizontal } from 'react-icons/hi'

const RightContent = () => {
  return (
    <div className='flex-1'>
      <div className='relative'>
        <div className='absolute w-2/3 justify-self-end inset-0 border-2 border-transparent rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-white before:opacity-50 before:[mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask-image:linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.03)_52%,rgba(255,255,255,0.5)_100%)] pointer-events-none' />
        <div className='bg-[#101011] rounded-3xl p-7 w-2/3 justify-self-end'>
          <h2 className='text-white font-medium text-lg'>New user preferences</h2>
          <div className='flex items-center justify-between mt-7'>
            <div>
              <p className='text-white opacity-40 text-sm'>Growth percentage</p>
              <p className='text-white text-5xl font-semibold mt-3'>85%</p>
            </div>
            <div>
              <p className='text-white opacity-40 text-sm'>Unique, last 30 days</p>
              <p className='text-white text-5xl font-semibold mt-3'>74.87K</p>
            </div>
          </div>
          <div className='mt-9'>
            <img src='/assets/hero-chart.png' alt='Hortes' className='pointer-events-none' />
            <div className='flex items-center justify-between text-xs text-white opacity-50 mt-6'>
              <p>Mar 1</p>
              <p>Mar 2</p>
              <p>Mar 3</p>
              <p>Mar 4</p>
              <p>Mar 5</p>
              <p>Mar 6</p>
            </div>
          </div>
          <table className='mt-6 w-full'>
            <tr className='text-white'>
              <td className='py-2 flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-primary' />
                <p className='font-medium'>United States</p>
              </td>
              <td className='opacity-50 text-sm px-4'>44,054</td>
              <td className='opacity-50 text-sm px-4'>48%</td>
              <td>
                <HiOutlineDotsHorizontal className='opacity-50' />
              </td>
            </tr>
            <tr className='text-white'>
              <td className='py-2 flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-[#008AEA]' />
                <p className='font-medium'>France</p>
              </td>
              <td className='opacity-50 text-sm px-4'>35,085</td>
              <td className='opacity-50 text-sm px-4'>56%</td>
              <td>
                <HiOutlineDotsHorizontal className='opacity-50' />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default RightContent