// Sample food data
const foods = [
    {
        name: "Burger",
        price: 120,
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Pizza",
        price: 250,
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Pasta",
        price: 180,
        image: "https://via.placeholder.com/200"
    }
];

// Load items dynamically
const container = document.getElementById("foodContainer");

foods.forEach(food => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${food.image}" />
        <h3>${food.name}</h3>
        <p>₹${food.price}</p>
        <button onclick="addToCart('${food.name}')">Add to Cart</button>
    `;

    container.appendChild(card);
});

// Button functions
function orderNow() {
    alert("Redirecting to order page...");
}

function addToCart(item) {
    alert(item + " added to cart!");
}