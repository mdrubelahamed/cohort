import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
    const [bgColor, setBgColor] = useState("");

    function handleClick(color) {
        setBgColor(color);
    }

    useEffect(() => {
        document.body.style.backgroundColor = bgColor;
    }, [bgColor]);

    return (
        <>
            <button className=" bg-red-700 text-3xl p-4 m-2 rounded-2xl" onClick={() => handleClick("red")}>
                Red
            </button>

            <button className="bg-green-500 text-3xl p-4 m-2 rounded-2xl" onClick={() => handleClick("green")}>
                Green
            </button>
            <button className="bg-blue-500 text-3xl p-4 m-2 rounded-2xl" onClick={() => handleClick("blue")}>
                Blue
            </button>
            <button className="bg-yellow-500 text-3xl p-4 m-2 rounded-2xl" onClick={() => handleClick("yellow")}>
                Yellow
            </button>
            <button className="bg-black-500 text-3xl p-4 m-2 rounded-2xl" onClick={() => handleClick("#212121")}>
                Black
            </button>
        </>
    );
}
