import "./App.css"
import { RevenueCard } from "./components/RevenueCard"

function App() {
    return (
        <div className="grid grid-cols-3 rounded shadow-sm">
            <RevenueCard title={"Amount Pending"} amount={"92312.20"} orderCount={13} />
        </div>
    )
}

export default App
k