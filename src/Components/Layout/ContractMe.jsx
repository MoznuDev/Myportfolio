import React from 'react'
import Button from '../Button'

const ContractMe = () => {
  return (
   <>
   <div className="bg-gray-500 py-15">
    <div className="max-w-mContainer mx-auto">
        <div className="lg:mx-0 lg:w-[50%] md:mx-auto sm:w-[90%] md:w-[60%] md:text-left items-center flex-col md:flex-row gap-x-8 mx-10">
            <h2 className='text-[16px] font-medium text-green-400 mt-20'>Font-End Developer</h2>
            <h2 className='font-bold lg:text-[60px] md:text-[40px] mt-6'>Graphic Designer With 10 Years Of Experience.</h2>
            <p className='text-[16px] mt-10 font-medium text-center lg:mr-[100px] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.</p>
       
               <Button className={'sm:text-center w-[30%]  py-2 rounded-2xl text-center bg-violet-500  mt-15 text-[18px] hover:bg-white lg:w-[25%]'} text={"Contract me"}/>
        </div>

    </div>
   </div>
   </>
  )
}

export default ContractMe