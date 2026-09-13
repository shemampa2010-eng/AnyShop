let productsContainer = document.getElementById("products");

function displayProducts(products) {
    productsContainer.innerHTML = "";

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    products.forEach(function(product) {

        let cartItem = cart.find(function(item) {
            return item.product == product.id;
        });

        let actionElement = "";

        if (cartItem && cartItem.quantity >= product.stock) {

            actionElement = `<span style="color: red;">Out of stock</span>`;

        } else {

            actionElement = `
                <div class="quantity-controls">
                    <button class="minus">-</button>
                    <span class="quantity">1</span>
                    <button class="plus">+</button>
                    <p class="go-to-cart"></p>
                </div>
            `;
        }

        productsContainer.innerHTML += `
            <div class="product" data-id="${product.id}">

                <img class="product-image" src="${product.images[0]}">

                <h2>${product.title}</h2>

                <p>$${product.price}</p>

                ${actionElement}

                <p>
                    Size:

                    <select class="change-size" data-id="${product.id}">
                        <option value="Select size">Select size</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>

                    <button class="add" data-id="${product.id}">add</button>
                </p>

            </div>
        `;

    });

    let boxes = document.querySelectorAll(".product");

    boxes.forEach(function(box) {

        let plus = box.querySelector(".plus");
        let minus = box.querySelector(".minus");
        let quantity = box.querySelector(".quantity");
        let add = box.querySelector(".add");
        let selectSize = box.querySelector(".change-size");
        
        box.addEventListener("click", function() {
            let productId = box.dataset.id;
            window.location.href = `product.html?id=${productId}`;
        });

        if (plus) {
            plus.addEventListener("click", function(event) {
                event.stopPropagation();
                let productId = box.dataset.id;
                let product = clothes.find(function(p) { return p.id == productId; });
                let currentQuantity = Number(quantity.textContent);

                if (product && currentQuantity < product.stock) {
                    quantity.textContent = currentQuantity + 1;
                }
            });
        }

        if (minus) {
            minus.addEventListener("click", function(event) {
                event.stopPropagation();
                let currentQuantity = Number(quantity.textContent);

                if (currentQuantity > 0) {
                    quantity.textContent = currentQuantity - 1;
                }
            });
        }

        if (selectSize){
            selectSize.addEventListener("click", function(event){
                event.stopPropagation();
            });
            
            selectSize.addEventListener("change", function(event) {
                event.stopPropagation();
            });
        }

        if (add) {
            add.addEventListener("click", function(event) {
                event.stopPropagation();
                let productId = box.dataset.id;
                let product = clothes.find(function(p) { return p.id == productId; });
                let qty = Number(quantity.textContent);

                if (qty <= 0) {
                    alert("Choose a quantity first");
                    return;
                }

                let goToCartMessage = box.querySelector(".go-to-cart");
                if (goToCartMessage) {
                    goToCartMessage.innerHTML = "Successfully added to cart!";
                    setTimeout(function() {
                        goToCartMessage.innerHTML = "";
                    }, 1500);
                }

                let cart = JSON.parse(localStorage.getItem("cart")) || [];

                let existingItem = cart.find(function(item) {
                    return item.product == productId;
                });

                let cartQuantity = 0;

                if (existingItem) {
                    cartQuantity = Number(existingItem.quantity);
                }

                if (product && cartQuantity + qty > product.stock) {
                    alert("Not enough stock");
                    return;
                }

                if (existingItem) {
                    existingItem.quantity = cartQuantity + qty;
                } else {
                    cart.push({
                        product: productId,
                        size: selectSize ? selectSize.value : "Select size",
                        quantity: qty
                    });
                }

                let cartCountElement = document.getElementById("cartCount");
                if (cartCountElement) {
                    let currentCount = Number(cartCountElement.textContent) || 0;
                    cartCountElement.textContent = currentCount + 1;
                }

                localStorage.setItem("cart", JSON.stringify(cart));

                add.classList.add("activeAnim");
                setTimeout(function() {
                    add.classList.remove("activeAnim");
                }, 500);

                quantity.textContent = 0;
            });
        }

    });

}

// --- FONCTION POUR FILTRER ET TRIER DEPUIS LES INPUTS ---
function applyFilters() {
    let searchInput = document.getElementById("search");
    let rangeInput = document.getElementById("range"); // Ton input où l'on écrit un nombre
    let sortSelect = document.getElementById("sort");

    let filtered = [...clothes];

    // 1. Recherche par texte (search)
    if (searchInput && searchInput.value.trim() !== "") {
        let text = searchInput.value.toLowerCase().trim();
        filtered = filtered.filter(function(product) {
            return product.title.toLowerCase().includes(text);
        });
    }

    // 2. Filtrage par prix maximum (quand on écrit dans range)
    if (rangeInput && rangeInput.value !== "") {
        let maxPrice = Number(rangeInput.value);
        filtered = filtered.filter(function(product) {
            return product.price <= maxPrice;
        });
    }

    // 3. Tri (sort)
    if (sortSelect && sortSelect.value !== "") {
        let sortValue = sortSelect.value;

        if (sortValue === "price-low") {
            filtered.sort(function(a, b) { return a.price - b.price; });
        } else if (sortValue === "price-high") {
            filtered.sort(function(a, b) { return b.price - a.price; });
        } else if (sortValue === "name") {
            filtered.sort(function(a, b) { return a.title.localeCompare(b.title); });
        }
    }

    // Réaffiche les produits filtrés
    displayProducts(filtered);
}

// --- ÉCOUTEURS D'ÉVÉNEMENTS ---
document.addEventListener("DOMContentLoaded", function() {
    let searchInput = document.getElementById("search");
    let rangeInput = document.getElementById("range");
    let sortSelect = document.getElementById("sort");

    if (searchInput) {
        searchInput.addEventListener("input", applyFilters);
    }

    if (rangeInput) {
        // L'événement "input" réagit à CHAQUE chiffre écrit ou effacé
        rangeInput.addEventListener("input", applyFilters);
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", applyFilters);
    }

    // Affichage initial
    applyFilters();
});