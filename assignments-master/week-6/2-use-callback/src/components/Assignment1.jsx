import { useCallback, useState, memo } from "react"

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0)

    // Memoize the increment and decrement functions correctly
    // we can get access the currentCount inside setCount, it helps us do not get dependent to the "count" state variable
    const handleIncrement = useCallback(() => setCount((currentCount) => currentCount + 1), [])
    const handleDecrement = useCallback(() => setCount((currentCount) => currentCount - 1), [])

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    )
}

const CounterButtons = memo(({ onIncrement, onDecrement }) => {
    return (
        <div>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </div>
    )
})
