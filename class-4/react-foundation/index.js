function createChild(title, description, id) {
    const child = document.createElement("div");

    const firstGrandChild = document.createElement("div");
    firstGrandChild.innerHTML = title;
    const secondGrandChild = document.createElement("div");
    secondGrandChild.innerHTML = description;
    // create button child and set a onclick function markAsDone and adding id so we know which mark as done button we are reffering
    const thirdGrandChild = document.createElement("button");
    thirdGrandChild.innerHTML = "Mark as done";
    thirdGrandChild.setAttribute("onclick", `markAsDone(${id})`);
    // append all childs
    child.appendChild(firstGrandChild);
    child.appendChild(secondGrandChild);
    child.appendChild(thirdGrandChild);
    child.setAttribute("id", id);
    return child;
}

// state will be array
// every element of state would of have a title, description, id

function updateDomAccToStated(state) {
    const parent = document.getElementById("container");
    parent.innerHTML = "";
    for (let i = 0; i < state.length; i++) {
        const child = createChild(state[i].title, state[i].description, state[i].id);
        parent.appendChild(child);
    }
}

updateDomAccToStated([
    {
        title: "hellojs",
        description: "js is good",
        id: 1,
    },
    {
        title: "hellojs2",
        description: "js is good2",
        id: 2,
    },
]);
