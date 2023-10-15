import { useContext } from 'react'

import { CountContext } from './HookUseReducer'

export default function ComponentF() {
  const { countState, countDispatch } = useContext(CountContext)

  return (
    <div>
      Component F - {countState}
      {'    '}
      <button onClick={() => countDispatch('increment')}>Increment</button>
      <button onClick={() => countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countDispatch('reset')}>Reset</button>
    </div>
  )
}
