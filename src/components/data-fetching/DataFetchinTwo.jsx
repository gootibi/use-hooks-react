import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: false,
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: false
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: true
            }
        default:
            return state
    }
}

const id = Math.floor(Math.random() *100 + 1)

function DataFetchinTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)
   
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [])

    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? 'Something is wrong...' : null}
        </div>
    )
}

export default DataFetchinTwo