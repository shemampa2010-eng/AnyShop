let urlInfo = new URLSearchParams(window.location.search);

let id = urlInfo.get("id");

let product = clothes.find(function(product) {
    return product.id == id;
});


let productContainer = document.getElementById("product");

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

    <div class="sizes"></div> 
    
    <input type= "number" id= "quantity">
`;

let quantity = document.getElementById("quantity")
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


let sizesContainer = document.querySelector(".sizes");

product.attributes.sizes.forEach(function(size) {

    sizesContainer.innerHTML += `
        <button>${size}</button>
    `;

});


let sizeButtons = document.querySelectorAll(".sizes button");

let selectedSize = null;


sizeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        sizeButtons.forEach(function(button) {
            button.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedSize = button.textContent;

    });

});


let addToCart = document.getElementById("addToCart");


addToCart.addEventListener("click", function() {

    if (selectedSize === null) {
        alert("Please choose a size");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let qty = parseInt(quantity.value) || 1;

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