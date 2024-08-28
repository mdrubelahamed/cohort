export function CreateTodo() {
    return (
        <div>
            <input type="text" placeholder="tilte" /> <br />
            <input type="text" placeholder="description" /> <br />
            <button
                onClick={() => {
                    fetch("http://localhost:3000/todos", {
                        method: "POST",
                        body: {},
                    }).then(async (res) => {
                        const json = await res.json()
                        alert("Todo added")
                    })
                }}
            >
                Add todo
            </button>
        </div>
    )
}
