import { useEffect, useState } from 'react'

import MouseEvent from './MouseEvent'
import IntervalCounter from './IntervalCounter'
import DataFetching from './DataFetching'

export default function HookUseEffect() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [display, setDisplay] = useState(false)
  const [counter, setCounter] = useState(false)

  useEffect(() => {
    if (count > 0) {
      console.log('Updating document title')
      document.title = `You clicked ${count} times`
    }
  }, [count])

  return (
    <div>
      <h1>UseEffect Hook</h1>
      <div>
        <h2>Click</h2>
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Click {count} times
        </button>
      </div>
      <br />
      <hr className="semi-hr" />
      <div>
        <h2>Mouse position</h2>
        <button onClick={() => setDisplay(!display)}>
          {display ? 'Hide mouse position' : 'Show mouse position'}
        </button>
        {display && <MouseEvent />}
      </div>
      <br />
      <hr className="semi-hr" />
      <div>
        <h2>Interval Counter</h2>
        <button onClick={() => setCounter(!counter)}>
          {counter ? 'Stop counter' : 'Start counter'}
        </button>
        {counter && <IntervalCounter />}
      </div>
      <br />
      <hr className="semi-hr" />
      <div>
        <h2>Data Fetching</h2>
        <DataFetching />
      </div>
      <br />
      <hr />
    </div>
  )
}
