import React from 'react'
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

export default ComponentF