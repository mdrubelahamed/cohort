import { useState } from "react";
import "./App.css";

export default function App() {
    const [bgColor, setBgColor] = useState("#212121");

    return (
        <>
            <div className="w-full h-screen duration-200" style={{ backgroundColor: bgColor }}>
                <div className="w-full flex h-screen justify-center items-center inset-x-0 px-2">
                    <div className="flex flex-wrap justify-center gap-3 px-3 py-2 rounded-xl">
                        <button onClick={() => setBgColor("red")} className="outline-none px-6 py-3 rounded-3xl text-white" style={{ backgroundColor: "red" }}>
                            Red
                        </button>
                        <button onClick={() => setBgColor("green")} className="outline-none px-6 py-3 rounded-3xl text-white" style={{ backgroundColor: "green" }}>
                            Green
                        </button>
                        <button onClick={() => setBgColor("blue")} className="outline-none px-6 py-3 rounded-3xl text-white" style={{ backgroundColor: "blue" }}>
                            Blue
                        </button>
                        <button onClick={() => setBgColor("yellow")} className="outline-none px-6 py-3 rounded-3xl text-white" style={{ backgroundColor: "yellow" }}>
                            Yellow
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
