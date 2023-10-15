import { createContext, useReducer } from 'react'

import CounterTwo from './CounterTwo'
import CounterOne from './CounterOne'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export const CountContext = createContext()

const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

export default function HookUseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>UseReducer Hook</h1>
      <CounterOne />
      <CounterTwo />
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div>
          <h2>Using useContext</h2>
          Count - {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </CountContext.Provider>
      <br />
      <hr />
    </div>
  )
}
