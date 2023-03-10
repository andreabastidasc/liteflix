import React from 'react'

export const PlusIcon = props => {
  const { width = '14', height = '14' } = props

  return (
    <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 0V14" stroke="white"/>
      <path d="M14 7L-5.96046e-08 7" stroke="white"/>
    </svg>
  )
}
