// JSON DATASET
const products = [
    {
        id:1,
        name:"Laptop",
        price:50000,
        image:"https://picsum.photos/200?1"
    },
    {
        id:2,
        name:"Phone",
        price:20000,
        image:"https://picsum.photos/200?2"
    },
    {
        id:3,
        name:"Headphones",
        price:3000,
        image:"https://picsum.photos/200?3"
    },
    {
        id:4,
        name:"Shoes",
        price:2500,
        image:"https://picsum.photos/200?4"
    },
    {
        id:5,
        name:"Watch",
        price:4000,
        image:"https://picsum.photos/200?5"
    },
    {
        id:6,
        name:"Bag",
        price:1500,
        image:"https://picsum.photos/200?6"
    }
];

const container = document.getElementById("productContainer");

function loadProducts(){
    const container = document.getElementById("productContainer");
    if(!container) return;

    container.innerHTML = "";

    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="buyNow(${product.id})">Buy Now</button>
        `;

        container.appendChild(div);
    });
}

function loadPurchasePage(){
    const data = localStorage.getItem("selectedProduct");

    if(!data) return;

    const product = JSON.parse(data);

    document.getElementById("productName").innerHTML = `
        ${product.name} <br> ₹${product.price}
    `;
}

function purchase(){
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const account = document.getElementById("account").value.trim();

    if(name === "" || phone === "" || account === ""){
        alert("All fields are required");
        return;
    }

    alert("Item purchased successfully!");

    // optional reset
    localStorage.removeItem("selectedProduct");
}

// BUY ACTION
function buyNow(id){
    const product = products.find(p => p.id === id);

    localStorage.setItem("selectedProduct", JSON.stringify(product));

    window.location.href = "purchase.html";
}

// SAFE INITIAL LOAD
if(document.getElementById("productContainer")){
    loadProducts();
}

if(document.getElementById("productName")){
    loadPurchasePage();
}