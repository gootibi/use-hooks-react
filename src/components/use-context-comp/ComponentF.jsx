import React, { useContext } from 'react'
import { CountContext } from '../../App'

function ComponentF() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component F
            <button type="button" onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button type="button" onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button type="button" onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentF

/*import React from 'react'
import { UserContext, ChannelContext } from '../../App'

function ComponentF() {
    return (
        <div>
            ComponentF:
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    chanel => {
                                        return (
                                            <div>User context value: {user}, channel context value: {chanel}.</div>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF*/