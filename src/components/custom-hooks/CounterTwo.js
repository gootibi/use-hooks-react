import React from 'react'
import useCounter from '../../hooks/useCounter'

function CounterTwo() {
    // const [count, setCount] = useState(0)

    // const increment = () => {
    //     setCount(prevCount => prevCount + 1)
    // }
    // const decrement = () => {
    //     setCount(prevCount => prevCount - 1)
    // }
    // const reset = () => {
    //     setCount(0)
    // }

    const [count, increment, decrement, reset] = useCounter(10, 5) // useCounter is costume hook and initialCount 10

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTwo