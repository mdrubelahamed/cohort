async function getUserData() {
    try {
        const response = await fetch("https://fakerapi.it/api/v1/persons");
        const result = await response.json();

        const data = result["data"];
        document.querySelector("#container").textContent = JSON.stringify(data, null, 4);

    } catch (error) {
        console.log("ERROR:", error);
    }
}
