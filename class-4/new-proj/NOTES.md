## Topic

-   spread operator
-   wraper components
-   how to pass one component inside another component
-   concept of children in a component
-   React return
-   re-rendering
-   key
-   components

-   useState
-   useEffect
-   useRef
-   useMemo
-   useCallback

the lowest ancestor should have the state

you should lift it up the states so all children can use it
that's why it's called lowest ancestor mean the lowest whom i can give state so everyone need can get it

```jsx
// ghostCode
import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

// Two header one name should get updated but not the second one
export default function App() {
    const [title, setTitle] = useState("My name is Rubel");

    function updateTitle() {
        setTitle("My name is " + Math.random());
    }

    return (
        <div>
            <button onClick={updateTitle}>Update the title</button>
            <Header title={title}> </Header>
            <Header title="Sam"></Header>
            <Header title="Sam"></Header>
            <Header title="Sam"></Header>
            <Header title="Sam"></Header>
            <Header title="Sam"></Header>
        </div>
    );
}

const Header = React.memo(function Header({ title }) {
    return <div>{title}</div>;
});
```

## Card Wrapper sample code

```jsx
import "./App.css";

export default function App() {
    return (
        <div>
            <CardWrapper>
                <TextComponent />
            </CardWrapper>
            <CardWrapper> hello js2 </CardWrapper>
        </div>
    );

    function TextComponent() {
        return <div>hello rohan</div>;
    }

    function CardWrapper({ children }) {
        return (
            <div style={{ border: "2px solid white", padding: 20, margin: 10 }}>
                {children}
            </div>
        );
    }
}
```
