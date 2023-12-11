import React, { useReducer } from 'react'
import { INITIAL_STATE, postReducer } from './postReducer'
import { ACTION_TYPE } from './postActionType'
import axios from 'axios'

function Post() {

    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE)
    const id = Math.floor(Math.random() * 100 + 1)
    const handleClick = () => {
        dispatch({ type: ACTION_TYPE.FETCH_START })
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                return dispatch({ type: ACTION_TYPE.FETCH_SUCCESS, payload: res.data })
            })
            .catch(err =>
                dispatch({ type: ACTION_TYPE.FETCH_ERROR })
            )
    }
    return (
        <div>
            <button onClick={handleClick}>
                {state.loading ? 'Loading...' : 'Fetch the post'}
            </button>
            <p>{state.post?.title}</p>
            <span>{state.error && 'Something is wrong!'}</span>
        </div>
    )
}

export default Post