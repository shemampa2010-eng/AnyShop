let productsContainer = document.getElementById("products");

clothes.forEach(function(product) {

    productsContainer.innerHTML += `
        <div class="product" data-id="${product.id}">
            <img class="product-image" src="${product.images[0]}">
            <h2>${product.title}</h2>
            <p>$${product.price}</p>
            <button class="add">add to cart</button>
        </div>
    `;

});


productsContainer.addEventListener("click", function(event) {

    if (event.target.matches(".add")) {
        console.log("Add to cart");
        console.log(event.target.parentElement.dataset.id);
        return;
    }

    if (event.target.matches(".product")) {
        let id = event.target.dataset.id;

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