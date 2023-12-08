import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0

    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let index = 0; index < 5; index++) {
            setCount(prevCount => prevCount + 1) // prevCount az előző értéket megtartja és ahoz adja hozzá a 1-t, a count lenne ott pl.: setCount(count+1) mindig csak az 1 menne hozzá és nem ismételné meg még 4szer, hiába vona for ciklus
        }
    }

    return (
        <div>
            Count: {count}
            <br />
            <button type="button" onClick={() => setCount(initialCount)}>Reset</button>
            <button type="button" onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button type="button" onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button type="button" onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo