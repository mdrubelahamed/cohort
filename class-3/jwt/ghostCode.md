```javascript
// TASK1 GENERATE JWT TOKEN AND VERIFY JWT TOKEN
const jwt = require("jsonwebtoken");
const secretKey = "secret";
const user = {
    userId: "123456",
    username: "johndoe",
    role: "admin",
};

// generate jwt token
function generateJwtToken(payload, secretKey) {
    const token = jwt.sign(payload, secretKey);
    return token;
}

const result = generateJwtToken(user, secretKey);
console.log(result);

function verifyJwtToken(jwtToken, secretKey) {
    const payload = jwt.verify(jwtToken, secretKey);
    return payload;
}

const payload = verifyJwtToken(result, secretKey);
console.log(payload);
```

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTYiLCJ1c2VybmFtZSI6ImpvaG5kb2UiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MjQzMjU1MzJ9.QAPU8tcR8zOyHiwru9kDMb1lYuOj6NSfo7vbVlYx8qg

```javascript
function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const parent = document.getElementById("container");
    const finalChild = createChild(title, description, ++globalId);
    parent.appendChild(finalChild);
}

function markAsDone(id) {
    const parent = document.getElementById(id);
    parent.children[2].innerHTML = "Done";
}
```
