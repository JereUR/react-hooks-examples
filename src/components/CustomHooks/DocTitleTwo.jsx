import { useState } from 'react'

import useDocumentTitle from './hooks/useDocumentTitle'

export default function DocTitleTwo() {
  const [count, setCount] = useState(0)

  useDocumentTitle(count)

  return (
    <div>
      <h3>DocTitleTwo</h3>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}
