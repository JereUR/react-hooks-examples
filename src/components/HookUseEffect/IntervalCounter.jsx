import { useEffect, useState } from 'react'

export default function IntervalCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)

    return () => clearInterval(interval)
  }, [])

  return <div>{count}</div>
}
