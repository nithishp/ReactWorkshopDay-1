import React from 'react'

const Card = ({count}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-white font-serif text-[30px]'>This is the count</h1>
        <h2 className='text-white font-serif text-[60px]'>{count}</h2>
    </div>
  )
}

export default Card