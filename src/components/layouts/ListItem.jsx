import React from 'react'

const ListItem = ({className,url,linkClassName,title}) => {
  return (
    <li className={className}><a href={url} className={linkClassName}>{title}</a></li>
  )
}

export default ListItem