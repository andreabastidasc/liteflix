import React from 'react'

export const MenuIcon = props => {
  const { width = '27', height = '14' } = props

  return (
    <svg width={width} height={height} viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1H27" stroke="white"/>
      <path d="M0 7H27" stroke="white"/>
      <path d="M10 13H27" stroke="white"/>
    </svg>
  )
}
