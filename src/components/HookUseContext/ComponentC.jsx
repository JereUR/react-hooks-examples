import { UserContext, ChannelContext } from '../../App'

export default function ComponentC() {
  return (
    <div>
      <h3>Without useContext from ComponentC:</h3>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User context value: {user} - Channel context value:{' '}
                    {channel}
                  </div>
                )
              }}
            </ChannelContext.Consumer>
          )
        }}
      </UserContext.Consumer>
    </div>
  )
}
