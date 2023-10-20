import { createContext } from 'react'

import './App.css'
import ComponentA from './components/HookUseContext/ComponentA'
import HookUseEffect from './components/HookUseEffect/HookUseEffect'
import HookUseState from './components/HookUseState/HookUseState'
import HookUseReducer from './components/HookUseReducer/HookUseReducer'
import HookUseCallback from './components/HookUseCallback/HookUseCallback'
import HookUseMemo from './components/HookUseMemo/HookUseMemo'
import HookUseRef from './components/HookUseRef/HookUseRef'
import CustomHooks from './components/CustomHooks/CustomHooks'

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
      <HookUseReducer />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseRef />
      <CustomHooks />
    </>
  )
}

export default App
