// Use Recoil library,to manage state

// Atom and selector are good enough to know how to use Recoil, but we can go also more depth by learning atomFamily and selectorFamily

import "./App.css"
import { useContext } from "react"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom } from "./atoms/Count"
import { evenFilter } from "./atoms/EvenFilter"

function App() {
    return (
        <div>
            <RecoilRoot>
                <Count />
            </RecoilRoot>
        </div>
    )
}

function Count() {
    console.log("re-render count func")

    return (
        <div>
            <CountRenderer />
            <Buttons />
            <EvenStatus />
        </div>
    )
}

function CountRenderer() {
    const count = useRecoilValue(countAtom)
    return <div>{count}</div>
}

// if the count value is even show a paragraph to say count is even
function EvenStatus() {
    const status = useRecoilValue(evenFilter)
    return <div>{status}</div>
}

function Buttons() {
    // const [count, setCount] = useRecoilState(countAtom)
    const setCount = useSetRecoilState(countAtom)
    return (
        <div>
            <button
                onClick={() => {
                    setCount((previousCount) => previousCount + 1)
                }}
            >
                Incerease
            </button>
            <button
                onClick={() => {
                    setCount((previousCount) => previousCount - 1)
                }}
            >
                Decrease
            </button>
        </div>
    )
}

export default App



