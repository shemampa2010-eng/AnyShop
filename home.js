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

let cartCount = document.getElementById("cartCount");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cartCount.textContent = cart.length;

addButton.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.stopPropagation();

        let id = button.parentElement.dataset.id;
        window.location.href = `product.html?id=${id}`;

        localStorage.setItem("cart", JSON.stringify(cart));


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


let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        let category;

        if (link.textContent === "Femme") {
            category = "women's clothing";
        }

        if (link.textContent === "Homme") {
            category = "men's clothing";
        }

        if (link.textContent === "Unisex") {
            category = "unisex";
        }

        let filteredClothes = clothes.filter(function(product) {
            return product.category === category;
        });

        productsContainer.innerHTML = "";

        filteredClothes.forEach(function(product) {

            productsContainer.innerHTML += `
                <div class="product" data-id="${product.id}">
                    <img class="product-image" src="${product.images[0]}">
                    <h2>${product.title}</h2>
                    <p>$${product.price}</p>
                    <button class="add">add to cart</button>
                </div>
            `;

        });
        console.log(filteredClothes);

    });

});