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

const search = document.getElementById("search");
const range = document.getElementById("range");

function filterProducts() {
    const searchValue = search.value.toLowerCase().trim();
    const maxPrice = parseFloat(range.value);

    const results = clothes.filter(function(product) {

        const matchesSearch = product.title.toLowerCase().includes(searchValue);

        const matchesPrice = Number(product.price) <= maxPrice;

        return matchesSearch && matchesPrice;
    });
    displayProducts(results);
}

search.addEventListener("input", filterProducts);
range.addEventListener("input", filterProducts);
