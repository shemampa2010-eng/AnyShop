
let urlInfo = new URLSearchParams(window.location.search);

let id = urlInfo.get("id");

let product = clothes.find(function(product) {
    return product.id == id;
});


let productContainer = document.getElementById("product");

productContainer.innerHTML = `
    <h1>${product.title}</h1>
    <img src="${product.images[0]}" width="300">
    
    <p>$${product.price}</p>
    <p>${product.description}</p>

    <h3>Choose your size</h3>

    <div class="sizes"></div>
`;

let sizesContainer = document.querySelector(".sizes");
product.attributes.sizes.forEach(function(size) {
    sizesContainer.innerHTML += `<button>${size}</button>`;
});

let sizeButtons = document.querySelectorAll(".sizes button");
let selectedSize = null

sizeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        sizeButtons.forEach(function(button) {
            button.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedSize = button.textContent;

    });

});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let addToCart = document.getElementById("addToCart");

let message = document.querySelector("#message")

addToCart.addEventListener("click", function() {

    cart.push({
      product: product.id,
      size: selectedSize
    });

    localStorage.setItem("cart" , JSON.stringify(cart))
});

addToCart.addEventListener("click", function() {

    addToCart.classList.add("clicked");

    message.textContent = "Added to the cart";

    setTimeout(function() {
        message.textContent = "";
    }, 1000);

});