import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [characterAllowed, setCharacterAllowed] = useState(false);
    const [password, setPassword] = useState("");

    // useRef hook
    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numberAllowed) {
            str += "0123456789";
        }
        if (characterAllowed) {
            str += "!#$%&*+?@~!#$%&*+?@~";
        }

        // generate random password
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1); // take random char from the str
            pass += str.charAt(char);
        }

        setPassword(pass);
    }, [length, numberAllowed, characterAllowed, setPassword]); // these depenndecy setPassword is for memoization(cache)

    // copyPasswordToClipboard function
    const copyPasswordToClipboard = useCallback(() => {
        // passwordRef optionmization it will just select text which will give a effect that we select the password
        passwordRef.current?.select();
        // passwordRef.current?.setSelectionRange(0, 101);
        window.navigator.clipboard.writeText(password);
    }, [password]);

    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, characterAllowed, passwordGenerator]); // these dependency if anything change run the func

    return (
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-orange-600  text-black">
            <h1 className="text-white text-center my-3 font-bold font-mono  text-2xl">
                Password generator
            </h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4 font-mono">
                <input
                    type="text"
                    value={password}
                    className="rounded-2xl outline-none w-full py-2 px-3 m-1"
                    placeholder="Password"
                    readOnly
                    ref={passwordRef}
                />
                <button
                    onClick={copyPasswordToClipboard}
                    className="rounded-2xl outline-none bg-blue-700 text-white py-2 px-4 m-1 shrink-0"
                >
                    copy
                </button>
            </div>
            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input
                        type="range"
                        min={8}
                        max={100}
                        value={length}
                        className="cursor-pointer"
                        onChange={(e) => {
                            setLength(e.target.value);
                        }}
                    />
                    <label className="italic">Length: {length}</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        defaultChecked={numberAllowed}
                        id="numberInput"
                        onChange={() => {
                            setNumberAllowed((prev) => !prev);
                        }}
                    />
                    <label className="italic" htmlFor="numberInput">
                        Numbers
                    </label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        defaultChecked={characterAllowed}
                        id="characterInput"
                        onChange={() => {
                            setCharacterAllowed((prev) => !prev);
                        }}
                    />
                    <label className="italic" htmlFor="characterInput">
                        Characters
                    </label>
                </div>
            </div>
        </div>
    );
}

export default App;
