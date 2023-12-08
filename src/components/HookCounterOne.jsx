import React, { useState, useEffect } from 'react';

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('useEffect');
        document.title = `You clicked ${count} times`
    },[count]);

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="button" onClick={() => setCount(prevCount => prevCount + 1)}> Click {count} count </button>
        </div>
    );
};

export default HookCounterOne;