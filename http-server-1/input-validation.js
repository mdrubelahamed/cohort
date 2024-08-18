const express = require("express");
const z = require("zod");

const app = express();

// Validate an array of product objects, where each product has:

// name: a non-empty string.
// price: a positive number.
// inStock: a boolean value.

// input validation logic
const schema = z.array(
    z.object({
        name: z.string().min(1),
        price: z.number().positive(),
        inStock: z.boolean(),
    })
);

app.use(express.json());

app.post("/validate", (req, res) => {
    const inputFromUser = req.body;

    const response = schema.safeParse(inputFromUser);

    console.log(response);

    res.json({
        msg: response,
    });
});

app.listen(3000);
