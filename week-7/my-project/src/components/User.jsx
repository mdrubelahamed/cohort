import "../App.css"
import React from "react"
import { useParams } from "react-router-dom"

export default function User() {
    const { id } = useParams()
    return (
        <div className="bg-gray-100 p-4">
            <div className="relative p-6 rounded-lg shadow-lg max-w-md mx-auto overflow-hidden">
                <h1 className="text-3xl font-semibold text-center text-black">User: {id}</h1>
                <div className="absolute inset-0 rounded-lg border-4 border-transparent animate-rgb-moving"></div>
            </div>
        </div>
    )
}
