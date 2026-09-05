let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartContainer = document.getElementById("cart");
let cartCount = document.getElementById("cartCount");
let totalContainer = document.getElementById("total");

cartContainer.innerHTML = "";

if (cart.length === 0) {
    cartContainer.textContent = "Your cart is empty";
    if (totalContainer) totalContainer.textContent = "Total : $0.00";
    if (cartCount) cartCount.textContent = "0";
}

let total = 0;
let totalQuantityCount = 0;

cart.forEach(function(item) {

    let product = clothes.find(function(product) {
        return product.id == item.product;
    });

    if (!product) {
        return;
    }

    let qty = parseInt(item.quantity) || 1;
    total += product.price * qty;
    totalQuantityCount += qty;

    let availableSizes = ["S", "M", "L", "XL"];

    let sizeOptionsHTML = availableSizes.map(function(s) {
        let selected = item.size === s ? "selected" : "";
        return `<option value="${s}" ${selected}>${s}</option>`;
    }).join("");

    cartContainer.innerHTML += `
        <div class="cart-product">
            <img src="${product.images[0]}" width="150">

            <h2>${product.title}</h2>

            <p>$${product.price}</p>

            <p>Size: ${item.size}</p>
            <p>
                Size: 
                <select class="change-size" data-id="${product.id}" data-size="${item.size}">
                    <option value="Select size">Select size</option>
                    <option value="S" ${item.size === "S" ? "selected" : ""}>S</option>
                    <option value="M" ${item.size === "M" ? "selected" : ""}>M</option>
                    <option value="L" ${item.size === "L" ? "selected" : ""}>L</option>
                    <option value="XL" ${item.size === "XL" ? "selected" : ""}>XL</option>
                </select>
            </p>

            <div class="quantity-controls">
                <button class="btn-qty minus" data-id="${product.id}" data-size="${item.size}">-</button>
                <span>${qty}</span>
                <button class="btn-qty plus" data-id="${product.id}" data-size="${item.size}">+</button>
            </div>

            <button class="delete-all" data-id="${product.id}" data-size="${item.size}">
                Delete All
            </button>
        </div>
    `;
});

if (totalContainer) {
    totalContainer.textContent = `Total : $${total.toFixed(2)}`;
}
if (cartCount) {
    cartCount.textContent = totalQuantityCount;
}

cartContainer.addEventListener("click", function(event) {

    let target = event.target;
    let id = target.dataset.id;
    let size = target.dataset.size;

    if (target.classList.contains("minus")) {
        cart.forEach(function(item) {
            if (item.product == id && item.size == size) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    cart = cart.filter(function(cartItem) {
                        return !(cartItem.product == id && cartItem.size == size);
                    });
                }
            }
        });

        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
    }

    if (target.classList.contains("plus")) {
        cart.forEach(function(item) {
            if (item.product == id && item.size == size) {
                let product = clothes.find(function(p) {
                    return p.id == id;
                });

                if (product && item.quantity < product.stock) {
                    item.quantity = (parseInt(item.quantity) || 1) + 1;
                } else {
                    alert(`Stock maximum atteint (${product ? product.stock : 0} disponibles)`);
                }
            }
        });

        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
    }

    if (target.classList.contains("delete-all")) {
        cart = cart.filter(function(cartItem) {
            return !(cartItem.product == id && cartItem.size == size);
        });

        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
    }

});