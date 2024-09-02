const mongoose = require("mongoose");
const { boolean } = require("zod");

(async function connectToDatabase() {
    await mongoose.connect(
        "mongodb+srv://hellojs:hello12345@cluster0.tzhvj.mongodb.net/todos"
    );
})();
// schema
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo,
};
