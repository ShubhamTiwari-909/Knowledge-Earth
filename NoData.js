import React from 'react'
import {BiError} from 'react-icons/bi'
function NoData() {
  return (
    <div className='grid grid-cols-1 place-items-center h-96 bg-gradient-to-r from-red-400 via-red-600 to-red-800'>
        <h1 className='text-5xl text-center p-8 text-white font-semibold font-mono'>NO DATA FOUND</h1>
        <BiError color='white' size='5rem' />
    </div>
  )
}

export default NoData