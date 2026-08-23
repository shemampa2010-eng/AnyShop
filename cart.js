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

    cartContainer.innerHTML += `
        <div class="cart-product">
            <img src="${product.images[0]}" width="150">

            <h2>${product.title}</h2>

            <p>$${product.price}</p>

            <p>Size: ${item.size}</p>
            <p>Quantity: ${qty}</p>

            <button class="remove" data-id="${product.id}" data-size="${item.size}">
                Remove
            </button>
        </div>
    `;
});

// Affichage du total et du nombre d'articles
if (totalContainer) {
    totalContainer.textContent = `Total : $${total.toFixed(2)}`;
}
if (cartCount) {
    cartCount.textContent = totalQuantityCount;
}

// Gestion des boutons de suppression
let removeButtons = document.querySelectorAll(".remove");

removeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let id = button.dataset.id;
        let size = button.dataset.size;

        cart.forEach(function(item) {
            // Vérifie l'ID et la Taille pour cibler la bonne ligne
            if (item.product == id && item.size == size) {
                let currentQty = parseInt(item.quantity) || 1;

                if (currentQty > 1) {
                    item.quantity = currentQty - 1;
                } else {
                    cart = cart.filter(function(cartItem) {
                        return !(cartItem.product == id && cartItem.size == size);
                    });
                }
            }
        });

        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();

    });

});