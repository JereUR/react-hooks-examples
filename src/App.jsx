import { createContext } from 'react'
import './App.css'
import ComponentA from './components/HookUseContext/ComponentA'
import HookUseEffect from './components/HookUseEffect/HookUseEffect'
import HookUseState from './components/HookUseState'

export const UserContext = createContext()
export const ChannelContext = createContext()

function App() {
  return (
    <>
      <HookUseState />
      <HookUseEffect />
      <UserContext.Provider value={'UserValue'}>
        <ChannelContext.Provider value={'ChannelValue'}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
