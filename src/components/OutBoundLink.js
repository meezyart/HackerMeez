import React from 'react'

export const OutBoundLink = ({ url, children}) => {
  return (
    <a
    href={url}
    rel="noopener noreferrer"
    target="_blank">
    {children}
    </a>
  )
}
