let productsContainer = document.getElementById("products");

clothes.forEach(function(product) {

    productsContainer.innerHTML += `
        <div class="product" data-id="${product.id}">
            <img class="product-image" src="${product.images[0]}">
            <h2>${product.title}</h2>
            <p>$${product.price}</p>
            <button class="add">+</button>
        </div>
    `;

});

let addButton = document.querySelectorAll(".add");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

addButton.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.stopPropagation();

        let id = button.parentElement.dataset.id;

        cart.push({
            product: id
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        console.log(cart);

    });

});


productsContainer.addEventListener("click", function(event) {

    if (event.target.classList.contains("add")) {

        let id = event.target.parentElement.dataset.id;

        console.log("Produit à ajouter :", id);

        return;
    }


    let box = event.target.closest(".product");

    if (box) {

        let id = box.dataset.id;

        window.location.href = `product.html?id=${id}`;
    }

});


let women = document.getElementById("Femme");
let men = document.getElementById("Homme");
let unisex = document.getElementById("Unisex");


let womenClothes = clothes.filter(function(product) {
    return product.category === "women's clothing";
});

let menClothes = clothes.filter(function(product) {
    return product.category === "men's clothing";
});

let unisexClothes = clothes.filter(function(product) {
    return product.category === "unisex";
});


women.addEventListener("click", function() {

    productsContainer.innerHTML = "";

    womenClothes.forEach(function(product) {

        productsContainer.innerHTML += `
            <div class="product" data-id="${product.id}">
                <img src="${product.images[0]}" width="200">
                <h2>${product.title}</h2>
                <p>$${product.price}</p>
                <button class="add">add to cart</button>
            </div>
        `;

    });

});


men.addEventListener("click", function() {

    productsContainer.innerHTML = "";

    menClothes.forEach(function(product) {

        productsContainer.innerHTML += `
            <div class="product" data-id="${product.id}">
                <img src="${product.images[0]}" width="200">
                <h2>${product.title}</h2>
                <p>$${product.price}</p>
                <button class="add">add to cart</button>
            </div>
        `;

    });

});


unisex.addEventListener("click", function() {

    productsContainer.innerHTML = "";

    unisexClothes.forEach(function(product) {

        productsContainer.innerHTML += `
            <div class="product" data-id="${product.id}">
                <img src="${product.images[0]}" width="200">
                <h2>${product.title}</h2>
                <p>$${product.price}</p>
                <button class="add">add to cart</button>
            </div>
        `;

    });

});