import { useState } from "react"

// create a counter where the upper value is 20 and lower is 0

export default function Counter() {
    let [count, setCount] = useState(0)

    const IncrementValue = () => {
        setCount((count) => Math.min(count + 1, 20))
    }

    /* return the highest number among value
     *  like Math.max(val1, val2, val3) => return highest among them
     *  here highest value between (count -1) & 0
     *  so if count -1 is greate than 0 then count -1 will get return
     *  but if count -1 is less than 0 then 0 will get return
     */
    const decrementValue = () => {
        setCount((count) => Math.max(count - 1, 0))
    }

    return (
        <div>
            <h1>Current Count {count}</h1> <br />
            <button onClick={IncrementValue}>Add Value</button> <br />
            <button onClick={decrementValue}>Remove Value</button>
            <h1>This is </h1>
        </div>
    )
}
