import React, { useState, useEffect } from 'react';

function DataFetching() {

    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [clickFromButton, setClickFromButton] = useState(1);

    const handleClick = () => {
        setClickFromButton(id);
    };

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${clickFromButton}`)
            .then((res) => res.json())
            .then((data) => setPost(data))
            .catch((error) => alert(error.message));
    }, [clickFromButton]);

    return (
        <div className='dataFetching'>
            <ul>
                <input type='text' onChange={e => setId(e.target.value)} placeholder='ID-t kérek...' />
                <button onClick={handleClick}> Fetch Post </button>
                <li key={post.id}> {post.title} </li>
            </ul>
        </div>
    );
};

export default DataFetching;