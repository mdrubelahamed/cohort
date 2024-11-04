## Routing

BrowserRouter

useNavigate() => this hook expect to use inside BrowserRouter

useNavigate() => the hook from react-router-dom

\*\*lazy loading

## suspense API => do async task in react

## Prop Drilling

=> push it down state as much as possible (least common ancestor)
it's good but in a large scale the prop can become hightly verbose or hard to look the code
URL - https://react.dev/learn/passing-data-deeply-with-context

## Context API

=> help to fix the prop drilling proble

```jsx
// The code to understand context-api
import { useContext, useState } from "react"
import "./App.css"
import { CounterContext } from "./context"

// wrap it for anyone that wants to use the teleprompted value inside a provider

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            {/* we gave the value to count for the CounterContext which will get used further */}
            <CounterContext.Provider value={count}>
                <Count count={count} setCount={setCount} />
            </CounterContext.Provider>
        </div>
    )
}

function Count({ setCount }) {
    console.log("Count re-render")
    const count = useContext(CounterContext)
    return (
        <div>
            <CountRenderer count={count} />
            <Buttons count={count} setCount={setCount} />
        </div>
    )
}

function CountRenderer() {
    const count = useContext(CounterContext)
    return <div>{count}</div>
}

function Buttons({ setCount }) {
    const count = useContext(CounterContext)

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
```

## createContext hook, useContext hook

## Why do we use context api ?

=> we use context api to make the code syntax look clener by fixing the prop drilling problem  
we don't use context api to optimize re-render

## How to use context api ?

1. define context

```jsx
import { createContext } from "react"

// intial define a context and export it
export const CounterContext = createContext(0)
```

2. provide the context

```jsx
// here we the CounterContext gives a provider which help we provide context without using prop drilling
<div>
    <CounterContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
    </CounterContext.Provider>
</div>
```

3. whoever want to use it how to use

```jsx
// here count variable is using the CounterContext with the help of useContext hoook
const count = useContext(CounterContext)
```

## Cons of context api

=> doesn't optimize re-render the "Count" function in our code still got re-render without having the count variable, or use CounterContext

## What is state management ?

A cleaner way to store the state of your app
Until now, the cleanest thing you can do is use the Context API.
It lets you teleport state
But there are better solutions that get rid of the problems that Context Api has
(unnecessary re-renders)

## Recoil

Has a concept of an atom to store
the state
An atom can be defined outside the
component
Can be teleported to any component

#### Things to learn in recoil

-   RecoilRoot
-   atom
-   useRecoilState
-   useRecoilValue
-   useSetRecoilState
-   selector

## Task

Build todo application with filtering logic
todos, filter => thing needed
2 input boxes (title, description) => atom
button
todos => atom
filter (random) => atom
selector ( the current set of todos)

<!-- ****************************************************************** -->

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
