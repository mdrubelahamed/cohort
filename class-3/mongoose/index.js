const mongoose = require("mongoose");
// connect the database
const connectToDatabase = require("../mongoDB-database-connection");

const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
    title: String,
    body: String,
    date: Date,
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

// create a new blogpost
async function createBlogPost() {
    try {
        const newPost = new BlogPost({
            title: "How Humanity will erase",
            body: "Human will create something so they didn't need to work and they will assign their work to bunch of machine.",
            date: Date.now(),
        });
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
