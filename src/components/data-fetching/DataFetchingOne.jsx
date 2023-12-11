import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [post, setPost] = useState({})

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false)
                setError(false)
                setPost(response.data)
            })
            .catch(err => {
                setLoading(false)
                setError('Server error: ' + err.message)
                setPost({})
            })
    }, [])


    return (
        <div>
            {loading ? 'Loading' : post.title}
            {error ? 'Somathing is wrong' : null}
        </div>
    )
}

export default DataFetchingOne