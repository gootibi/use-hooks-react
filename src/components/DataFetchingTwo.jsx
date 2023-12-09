import React, { useState, useEffect } from 'react';

function DataFetchingTwo() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () => {
        setIdFromButtonClick(id);
    };

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                if (!res.ok) {
                    alert('Server error');
                    return;
                }
                return res.json()
            })
            .then(data => setPost(data))
            .catch(err => console.log({ error: err }));
    }, [idFromButtonClick]);

    return (
        <div>
            <h1>Posts List</h1>
            <input type="text" onChange={e => setId(e.target.value)} placeholder='Pls ID ...' />
            <button type='button' onClick={handleClick}>Check ID</button>
            <ul>
                {
                    <li key={post.id}>{post.title}</li>
                }
            </ul>
        </div>
    );
};

export default DataFetchingTwo;