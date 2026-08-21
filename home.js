let productsContainer = document.getElementById("products");


function displayProducts(products) {

    productsContainer.innerHTML = "";

    products.forEach(function(product) {

        productsContainer.innerHTML += `
            <div class="product" data-id="${product.id}">
                <img class="product-image" src="${product.images[0]}">
                <h2>${product.title}</h2>
                <p>$${product.price}</p>
                <button class="add">+</button>
            </div>
        `;

    });

}


displayProducts(clothes);





productsContainer.addEventListener("click", function(event) {

    if (event.target.classList.contains("add")) {

        let id = event.target.parentElement.dataset.id;

        window.location.href = `product.html?id=${id}`;

        return;
    }


    let box = event.target.closest(".product");

    if (box) {

        let id = box.dataset.id;

        window.location.href = `product.html?id=${id}`;

    }

});


let navLinks = document.querySelectorAll("nav a:not(.cart)");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        if (link.textContent === "Home") {

            displayProducts(clothes);

            return;
        }


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


        displayProducts(filteredClothes);

    });

});

let search = document.getElementById("search")
let searchValue = search.value.toLowerCase();
search.addEventListener("input", function() {

    let searchValue = search.value.toLowerCase();

    clothes.forEach(function(product) {

        if (product.title.toLowerCase().includes(searchValue)) {
            console.log(product.title);
        }

    });

});
