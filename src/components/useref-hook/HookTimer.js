import React, { useEffect, useState, useRef } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            Hook timer : {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Cear Hook Timer</button>
        </div>
    )
}

export default HookTimer