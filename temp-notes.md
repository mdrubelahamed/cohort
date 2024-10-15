## Routing
BrowserRouter

useNavigate() => this hook expect to use inside BrowserRouter

useNavigate() => the hook from react-router-dom

**lazy loading 

## suspense API => do async task in react

## Prop Drilling
=> push it down state as much as possible (least common ancestor)
    it's good but in a large scale the prop can become hightly verbose or hard to look the code
    URL - https://react.dev/learn/passing-data-deeply-with-context

## Context API
=> help to fix the prop drilling proble


## createContext hook, useContext hook


## How to use context api ?
1. define context
```jsx
import { createContext } from "react";

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