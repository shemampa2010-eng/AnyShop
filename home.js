let productsContainer = document.getElementById("products");

function displayProducts(products) {

    productsContainer.innerHTML = "";

    products.forEach(function(product) {

        productsContainer.innerHTML += `
            <div class="product" data-id="${product.id}">
                <img class="product-image" src="${product.images[0]}">
                <h2>${product.title}</h2>
                <p>$${product.price}</p>
                <button class="add" data-id="${product.id}">+</button>
            </div>
        `;

    });

}

displayProducts(clothes);

productsContainer.addEventListener("click", function(event) {

    if (event.target.classList.contains("add")) {

        event.stopPropagation();

        let productId = event.target.dataset.id;
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let product = clothes.find(function(p) {
            return p.id == productId;
        });

        let existingItem = cart.find(function(item) {
            return item.product == productId;
        });

        // 3. Bloquer si le stock est atteint
        if (existingItem && product && existingItem.quantity >= product.stock) {
            alert("Stock maximum atteint !");
            return;
        }

        if (existingItem) {
            existingItem.quantity = (parseInt(existingItem.quantity) || 1) + 1;
        } else {
            cart.push({
                product: productId,
                size: "Select size",
                quantity: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        
        let button = event.target;
        button.classList.add("activeAnim");

        setTimeout(function() {
            button.classList.remove("activeAnim");
        }, 500);
        
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

        let matchesSearch = true;
        let matchesPrice = true;

        if (searchValue !== "") {
            matchesSearch = product.title.toLowerCase().includes(searchValue);
        }

        if (range.value !== "") {
            matchesPrice = Number(product.price) <= maxPrice;
        }

        return matchesSearch && matchesPrice;

    });

    displayProducts(results);
}

search.addEventListener("input", filterProducts);
range.addEventListener("input", filterProducts);

let sort = document.getElementById("sort");

sort.addEventListener("change", function(){
    let copy = [...clothes];

    if (sort.value === "price-low") {
        copy.sort(function(a, b) {
            return a.price - b.price;
        });
    } 
    if (sort.value === "price-high") {
        copy.sort(function(a, b) {
            return b.price - a.price;
        });
    }
    if (sort.value === "name"){
        copy.sort(function(a, b){
            if(a.title < b.title) return -1;
            if(a.title > b.title) return 1;
            return 0;
        });
    }
    displayProducts(copy);
});