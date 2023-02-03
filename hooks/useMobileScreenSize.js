import React, { useState, useEffect, use } from 'react'

const useMobileScreenSize = () => {
  const [width, setWidth] = useState(null)

  const handleWindowSizeChange = () => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth)
    }
  }

  useEffect(() => {
    if (width === null) {
      handleWindowSizeChange()
    }
  }, [])
  

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 768

  return isMobile
}

export default useMobileScreenSize
