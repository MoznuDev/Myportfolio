import React from 'react'
import Button from '../Button'

const Contract = () => {
  return (
    <>
    <div className="bg-gray-500 py-15">
        <div className="max-w-mContainer m-auto">
          <div className="flex flex-col md:flex-row mx-10 md:mx-0">
             <div className="shadow-2xl py-10 rounded-2xl mx-auto  w-full">
             <h2 className='text-3xl font-bold text-center w-[90%] mx-auto lg:w-[35%] mt-10 '>Interested Working
With me? Let's connect!</h2>
<Button className={'py-2 px-4 bg-violet-500 rounded-2xl border-2 w-[35%] lg:w-[15%] text-center mt-10 mx-auto'} text={"Contract me"}/>
           </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Contract