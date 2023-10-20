import { useEffect, useRef } from 'react'

export default function FocusInput() {
  const inputRef = useRef(null)

  useEffect(() => {
    //Focus the input element
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <h2>Focus input element</h2>
      <input ref={inputRef} type="text" />
    </div>
  )
}
