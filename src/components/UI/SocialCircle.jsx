import React from 'react'

function SocialCircle(props) {
  return (
    <a className={`${props.className} hover:scale-125 cursor-pointer sm:text-xl md:text-2xl`} href={props.page} target='blank' aria-label={props.label}>
        {props.children}
    </a>
  )
}

export const FooterSocial = (props) => {
    return (
      <a className={`${props.className} hover:scale-125`} href={props.page} target='blank' aria-label={props.label}>
          {props.children}
      </a>
    )
  }

export default SocialCircle