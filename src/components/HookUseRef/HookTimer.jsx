import { useEffect, useRef, useState } from 'react'

export default function HookTimer() {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1)
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <div>
      <h4>Hook Timer (With useRef) - {timer}</h4>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Hook Timer
      </button>
    </div>
  )
}
