import { useEffect, useState } from 'react'

export default function HookUseEffect() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 0) {
      document.title = `You clicked ${count} times`
    }
  }, [count])

  return (
    <div>
      <h1 style={{ textDecoration: 'underline', color: 'var(--title-color)' }}>
        UseEffect Hook
      </h1>
      <div>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Click {count} times
        </button>
      </div>
    </div>
  )
}
