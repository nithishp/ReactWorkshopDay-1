import React from 'react'

const CustomButton = ({text,handleClick}) => {
  return (
    <div className='mx-7'>
        <button className='text-[#6e171e] py-4 px-6 rounded-xl bg-white font-semibold' onClick={handleClick}>{text}</button>
    </div>
  )
}

export default CustomButton