// PRODUCTS DATA
const products = [
    {id:1, name:"Laptop", price:50000, category:"electronics"},
    {id:2, name:"Phone", price:20000, category:"electronics"},
    {id:3, name:"Shirt", price:1000, category:"clothing"},
    {id:4, name:"Jeans", price:2000, category:"clothing"}
];

// LOAD PRODUCTS
function loadProducts(filter="all"){
    const container = document.getElementById("products");
    if(!container) return;

    container.innerHTML = "";

    const filtered = filter === "all"
        ? products
        : products.filter(p => p.category === filter);

    filtered.forEach(p => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        `;

        container.appendChild(div);
    });
}

// FILTER
function filterProducts(){
    const value = document.getElementById("filter").value;
    loadProducts(value);
}

// ADD TO CART
function addToCart(id){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const item = cart.find(i => i.id === id);

    if(item){
        item.qty++;
    } else {
        const product = products.find(p => p.id === id);
        cart.push({...product, qty:1});
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
}

// GO TO CART
function goToCart(){
    window.location.href = "cart.html";
}

// GO HOME
function goHome(){
    window.location.href = "index.html";
}

// LOAD CART
function loadCart(){
    const container = document.getElementById("cartItems");
    const totalBox = document.getElementById("total");

    if(!container) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    container.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;

        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
            </div>

            <div class="qty-controls">
                <button onclick="changeQty(${item.id}, -1)">-</button>
                <span>${item.qty}</span>
                <button onclick="changeQty(${item.id}, 1)">+</button>
            </div>
        `;

        container.appendChild(div);
    });

    totalBox.textContent = "Total: ₹" + total;
}

// CHANGE QUANTITY
function changeQty(id, change){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.map(item => {
        if(item.id === id){
            item.qty += change;
        }
        return item;
    }).filter(item => item.qty > 0);

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// INITIAL LOAD
loadProducts();
loadCart();