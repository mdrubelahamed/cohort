const express = require("express")
const cors = require("cors")
const { createTodo, updateTodo } = require("./types")
const { todo } = require("./db")
const app = express()

const PORT = 3000

app.use(express.json())

app.use(cors())

// title, description

app.post("/todo", async (req, res) => {
    const createPayload = req.body
    const parsePayload = createTodo.safeParse(createPayload)
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs.",
        })
        return
    } else {
        // put it to mongodb
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false,
        })
        res.json({
            msg: "Todo Created",
        })
    }
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find()
    res.json({
        todos,
    })
})

app.put("/completed", async (req, res) => {
    const updatePayload = req.body
    const parsePayload = updateTodo.safeParse(updatePayload)
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You have wrong id",
        })
    }

    await todo.updateMany(
        {
            _id: req.body.id,
        },
        {
            completed: true,
        }
    )
    res.json({
        msg: "Todo marked as completed.",
    })
})

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})
