import React, { useState, useEffect } from 'react';

function HookCounterOne() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect');
        document.title = `You clicked ${count} times`
    },[count]);

    return (
        <div>
            {console.log('render')}
            <button type="button" onClick={() => setCount(prevCount => prevCount + 1)}> Click {count} count </button>
        </div>
    );
};

export default HookCounterOne;