import React from 'react'

export const TriangleIcon = props => {
  const { width = '64', height = '64' } = props

  return (
    <svg fill="#242424" width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#242424">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
      <g id="SVGRepo_iconCarrier">
      <path d="M21,21H3L12,3Z"/>
      </g>
    </svg>
  )
}
