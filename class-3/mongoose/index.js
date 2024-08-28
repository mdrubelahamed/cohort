// 0.import
const mongoose = require("mongoose");

// 1. connect to database
const connectToDatabase = require("../mongoDB-database-connection");

// 2. create a new schema
const blogPostSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: Date,
});

// 3. new model
const BlogPost = mongoose.model("BlogPost", blogPostSchema);

// 4. create a new blogpost with data
async function createBlogPost() {
    try {
        const newPost = new BlogPost({
            title: "How Humanity will erase",
            body: "Human will create something so they didn't need to work and they will assign their work to bunch of machine.",
            date: Date.now(),
        });
        // 5. save the data in mongoDB
        await newPost.save();
    } catch (error) {
        console.error("ERROR:", error);
    } finally {
        mongoose.connection.close();
    }
}

(async () => {
    await connectToDatabase();
    await createBlogPost();
})();

/* steps to use => mongoose

0. import mongoose library
1. first connect
2. create a mongoose schema
3. create a mongoose model(databaseName, schema)
4. create new data using const data = new modelName()
5. save the data
*/
