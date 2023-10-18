import { useContext } from 'react'

import ComponentC from './ComponentC'
import { ChannelContext, UserContext } from '../../App'

export default function ComponentB() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <div>
      <h3>With useContext from ComponentB:</h3>
      User context value: {user} - Channel context value: {channel}
      <br />
      <hr className="semi-hr" />
      <ComponentC />
    </div>
  )
}
