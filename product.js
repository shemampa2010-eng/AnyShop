let storedClothes = localStorage.getItem("clothes");
if (storedClothes) {
    clothes = JSON.parse(storedClothes);
}

let urlInfo = new URLSearchParams(window.location.search);
let id = urlInfo.get("id");

let product = clothes.find(function(product) {
    return product.id == id;
});

let productContainer = document.getElementById("product");

let sizeOptionsHTML = `<option value="Select size">Select size</option>`;

if (product.attributes && product.attributes.sizes) {
    product.attributes.sizes.forEach(function(size) {
        sizeOptionsHTML += `<option value="${size}">${size}</option>`;
    });
}

productContainer.innerHTML = `
    <h1>${product.title}</h1>

    <img id="mainImage" src="${product.images[0]}" width="300">

    <div class="images"></div>

    <p>$${product.price}</p>

    <p>${product.description}</p>

    <p>Rating: ${product.rating.rate} / 5</p>

    <p>Reviews: ${product.rating.count}</p>

    <p>Material: ${product.attributes.material}</p>

    <p>Stock: ${product.stock}</p>

    <h3>Choose your size</h3>

    <p>
        Size: 
        <select id="sizeSelect">
            ${sizeOptionsHTML}
        </select>
    </p>
    
    <input type="number" id="quantity" placeholder="quantity" value="1">
    <p id="stockDisplay">Stock: ${product.stock}</p>
`;

let quantity = document.getElementById("quantity");
let mainImage = document.getElementById("mainImage");
let imagesContainer = document.querySelector(".images");

imagesContainer.innerHTML = "";

product.images.forEach(function(image) {
    imagesContainer.innerHTML += `
        <img src="${image}" style="width: 60px; height: 60px;">
    `;
});

let images = document.querySelectorAll(".images img");

images.forEach(function(image) {
    image.addEventListener("click", function() {
        mainImage.src = image.src;
    });
});

let addToCart = document.getElementById("addToCart");

addToCart.addEventListener("click", function() {
    let sizeSelect = document.getElementById("sizeSelect");
    let selectedSize = sizeSelect.value;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let qty = parseInt(quantity.value) || 1;

    if (qty > product.stock) {
        alert("Stock insuffisant ! Il reste seulement " + product.stock + " articles.");
        return;
    }

    product.stock -= qty;
    localStorage.setItem("clothes", JSON.stringify(clothes));

    let existingItem = cart.find(function(item) {
        return item.product == product.id && item.size == selectedSize;
    });

    if (existingItem) {
        existingItem.quantity = (parseInt(existingItem.quantity) || 0) + qty;
    } else {
        cart.push({
            product: product.id,
            size: selectedSize,
            quantity: qty
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
});