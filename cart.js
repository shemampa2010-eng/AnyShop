let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartContainer = document.getElementById("cart");

let cartCount = document.getElementById("cartCount");

let totalContainer = document.getElementById("total");

cartContainer.innerHTML = "";

if (cart.length === 0) {
        cartContainer.textContent = "Your cart is empty";
    }

cart.forEach(function(item) {

    let product = clothes.find(function(product) {
        return product.id == item.product;
    });

    if (!product) {
        return;
    }
    cartContainer.innerHTML += `
        <div class="cart-product">
            <img src="${product.images[0]}" width="150">

            <h2>${product.title}</h2>

            <p>$${product.price}</p>

            <p>Size: ${item.size}</p>
            <p>Quantity: ${item.quantity}</p>

            <button class="remove" data-id="${product.id}">
                Remove
            </button>
        </div>
    `;
});


let removeButtons = document.querySelectorAll(".remove");


removeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let id = button.dataset.id;

        cart = cart.filter(function(item) {
            return item.product != id;
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        button.parentElement.remove();
        cartCount.textContent = cart.length;

    });

});

let total = 0;

cart.forEach(function(item) {

    let product = clothes.find(function(product) {
        return product.id == item.product;
    });

    total += product.price;
});

totalContainer.textContent = `Total : $${total.toFixed(2)}`;
