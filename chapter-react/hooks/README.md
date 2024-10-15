# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
<!-- ***************** hooks ********************* -->
----------------------------------------------------------------------------
----------------------------------------------------------------------------
# Common hooks in react and custom hooks

1. side effects 
=> 

2. hooks    
=> hooks are introduced in react 16.8   
    it helps to use state without writing class, using function based components    
    
    common hooks we are discussing

    1. useState

    2. useEffect => it's will run once and if we gave depedency then when the dependency get changes
    useEffect(()=>{}, []) // function(), [depedency array]
    
    3. useMemo => it's like cache

    4. useCallback => it's used to prevent re-renders in refenrence difference
        example: 
        function one(a, b) {return a + b}
        function two(a, b) {return a + b}

        one == two // output: false
        false because both function are same but their reference in the memory are different
        in react for refencial equality unnecessary rerenders happens to prevent that useCallback is used

    5. memo =>

