import React from 'react'

function WrapperCard(props) {
  return (
    <div className={`3xl:w-9/12 3xl:mx-auto 2xl:w-4/5 xl:w-4/5 xl:mx-auto lg:w-5/6 lg:mx-auto md:w-4/5 md:mx-auto sm:w-11/12 sm:mx-auto mx-6 ${props.className}`}>

        {props.children}
    </div>
  )
}

export default WrapperCard