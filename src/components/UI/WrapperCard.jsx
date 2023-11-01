import React from 'react'

function WrapperCard(props) {
  return (
    <div className={` xl:w-auto xl:mx-20 lg:w-[1000px] md:w-[750px] sm:w-[550px] mx-4 md:mx-auto ${props.className}`}>
        {props.children}
    </div>
  )
}

export default WrapperCard