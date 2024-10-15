import React, { useState, useMemo, useEffect } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: "Chocolates", value: 10 },
        { name: "Chips", value: 20 },
        { name: "Onion", value: 30 },
        { name: "Tomato", value: 30 },
        // Add more items as needed
    ]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                const fetchedItems = data.products.map((product) => ({
                    name: product.title,
                    value: product.price,
                }));
                setItems((prevItems) => [...prevItems, ...fetchedItems]);
            });
    }, []);

    // Your code starts here
    // we can use also reducer here to remove the for loop  **lookinto
    const totalValue = useMemo(() => {
        let total = 0;
        for (let i = 0; i < items.length; i++) {
            total += items[i].value;
        }
        return total;
    }, [items]);

    // Your code ends here
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - Price: ${item.value}
                    </li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
