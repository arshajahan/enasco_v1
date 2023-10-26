import React from 'react'

function WrapperCard(props) {
  return (
    <div className={` xl:w-[1000px] lg:w-[1020px] md:w-[750px] sm:w-[550px] mx-4 md:mx-auto ${props.className}`}>
        {props.children}
    </div>
  )
}

export default WrapperCard