import "../App.css" // Import your custom CSS file
import React from "react"
import { useLoaderData } from "react-router-dom"

export default function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/mdrubelahamed")
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    // })
    return (
        <>
            <h1 className="text-2xl font-bold mt-2">Fetching Github API</h1>
            <div className="bg-white p-4">
                <div className="relative p-6 rounded-lg shadow-lg max-w-md mx-auto overflow-hidden bg-gray-50 border border-gray-200">
                    <div className="flex flex-col items-center">
                        <img src={data.avatar_url} alt="Github profile picture" className="rounded-full border-4 mb-4 w-50 h-50" />
                        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-2">@{data.login}</h1>
                        <p className="text-xl font-semibold text-center text-gray-600">Followers: {data.followers}</p>
                        <p>{data.bio}</p>
                    </div>
                    <div className="absolute inset-0 rounded-lg border-4 border-transparent animate-rgb-moving"></div>
                </div>
            </div>
        </>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/mdrubelahamed")
    return response.json()
}
