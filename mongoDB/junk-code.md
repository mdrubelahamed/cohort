```javascript
app.post("/deleteRubelUsers", async (req, res) => {
    try {
        // Define the query to match documents where username and email are both "rubel"
        const query = { username: "Rubel", email: "Rubel" };

        // Delete the matching documents
        const result = await Users.deleteMany(query); // Use Mongoose to delete

        // Send response based on the result
        if (result.deletedCount > 0) {
            return res
                .status(200)
                .json({ message: `${result.deletedCount} user(s) deleted successfully.` });
        } else {
            return res.status(404).json({ message: "No users found with the specified criteria." });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "An error occurred while deleting users." });
    }
});
```
