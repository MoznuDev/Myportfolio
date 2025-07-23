import React from 'react'

const CounterPart = () => {
  return (
   <>
   <div className="bg-gray-400 py-6">
    <div className="max-w-mContainer mx-auto  ">
        <div className="flex items-center flex-col md:flex-row gap-x-8 mx-10 md:mx-0">
            <div className="lg:w-[24%] mt-7 w-full shadow-2xl p-5 mx-auto rounded-[10px]">
            <h2 className='text-[20px] font-bold text-center'>15<span>+</span></h2>
            <h2 className='text-2xl font-bold text-center'> Complete project</h2>
        </div>
        <div className="lg:w-[24%] mt-7 w-full shadow-2xl p-5 mx-auto rounded-[10px]">
            <h2 className='text-[20px] font-bold text-center'>75<span>+</span></h2>
            <h2 className='text-2xl font-bold text-center'>My Delivery project </h2>
        </div>
        <div className="lg:w-[24%] mt-7 w-full shadow-2xl p-5 mx-auto rounded-[10px]">
            <h2 className='text-[20px] font-bold text-center'>1005<span>+</span></h2>
            <h2 className='text-2xl font-bold text-center'>Total project</h2>
        </div>
        <div className="lg:w-[24%] mt-7 w-full shadow-2xl p-5 mx-auto rounded-[10px]">
            <h2 className='text-[20px] font-bold text-center'>90<span>%</span></h2>
            <h2 className='text-2xl font-bold text-center'>Customer feedback</h2>
        </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default CounterPart