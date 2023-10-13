import { useEffect, useState } from 'react'

export default function MouseEvent() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = (e) => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', logMousePosition)

    return () => window.removeEventListener('mousemove', logMousePosition)
  }, [])

  return (
    <div>
      <h5>
        Position X - {x} | Y - {y}
      </h5>
    </div>
  )
}
