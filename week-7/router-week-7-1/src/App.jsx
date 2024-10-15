// react-router-dom, suspense api, lazy loading
import { useContext } from "react"
import "./App.css"
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { countAtom } from "./store/atoms/count"

// wrap it for anyone that wants to use the teleprompted value inside a provider

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
    return (
        <div>
            <CountRenderer />
            <Buttons />
        </div>
    )
}

function CountRenderer() {
    const count = useRecoilValue(countAtom)
    return <div>{count}</div>
}

function Buttons() {
    const [count, setCount] = useRecoilState(countAtom)
    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                Incerease
            </button>
            <button
                onClick={() => {
                    setCount(count - 1)
                }}
            >
                Decrease
            </button>
        </div>
    )
}

export default App
