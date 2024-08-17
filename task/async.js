// PROBLEM LINK => https://chatgpt.com/c/5a41eac9-a288-45fb-ad1c-24b096320a3d

function fetchData() {
    const val = Math.random();

    return new Promise((resolve, reject) => {
        if (val > 0.5) {
            resolve("Data Fetched");
        } else {
            reject("Error fetching data");
        }
    });
}

async function main() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// main();

/* 
Create two asynchronous functions, getUser and getPosts. The getUser function should return a user object after 1 second, and getPosts should return an array of posts for that user after 2 seconds. Use async/await to first get the user and then get their posts, logging both the user and their posts.
*/

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "rubel", email: "rubel@example.com" });
        }, 1000);
    });
}

function getPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject([
                { name: "surjya", title: "Post 1" },
                { name: "rubel", title: "Post 2" },
            ]);
        }, 2000);
    });
}

async function main2() {
    try {
        const user = await getUser();
        console.log(user);
        const posts = await getPosts();
        console.log(posts);
    } catch (error) {
        console.log("ERROR:", error);
    }
}

main2();
