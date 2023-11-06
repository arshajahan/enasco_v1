import React from 'react'

function Line() {
  return (
    <div className=' grid grid-flow-col grid-cols-3'>
        <hr className='z-10 h-1 bg-red-600'/>
        <hr className='z-10 h-1 bg-yellow-400'/>
        <hr className='z-10 h-1 bg-green-600'/>
    </div>
  )
}

export default Line