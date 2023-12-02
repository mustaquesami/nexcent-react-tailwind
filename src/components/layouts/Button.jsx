import React from 'react'

const Button = ({className,btnTitle}) => {
  return (
    <button className={className}>{btnTitle}</button>
  )
}

export default Button