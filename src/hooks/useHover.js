import { useState, useRef, useEffect } from 'react'

function useHover() {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)

  function handleMouseEnter() {
    setHovered(true)
  }

  function handleMouseLeave() {
    setHovered(false)
  }
  useEffect(() => {
    ref.current.addEventListener('mouseenter', handleMouseEnter)
    ref.current.addEventListener('mouseleave', handleMouseLeave)
    return () => {}
  }, [])

  return [ref, hovered]
}

export default useHover
