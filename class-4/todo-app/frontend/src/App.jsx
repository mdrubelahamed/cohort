import "./App.css"
function MyButton() {
    return <button>I'm a button</button>
}

function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>
                Hello there.
                <br />
                How do you do?
            </p>
        </>
    )
}

const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
}

function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={"Photo of " + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                }}
            />
        </>
    )
}

const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
]
const products2 = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
]

function ShoppingList({products}) {
    const listItems = products.map((product) => (
        <li
            key={product.id}
            style={{
                color: product.isFruit ? "magenta" : "darkgreen",
            }}
        >
            {product.title}
        </li>
    ))

    return <ul>{listItems}</ul>
}

function Items({ products }) {
    return (
        <ul>
            {products.map((product) => {
                return <li key={product.id}> {product.title}</li>
            })}
        </ul>
    )
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
            <AboutPage />
            <Profile />
            <Items products={products} />
            <ShoppingList products={products2} />
        </div>
    )
}

