let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartContainer = document.querySelector("#cart");

cart.forEach(function(item) {

    let product = clothes.find(function(product) {
        return product.id == item.product;
    });

    cartContainer.innerHTML += `
        <div class="cart-product">
            <h2>${product.title}</h2>
            <p>$${product.price}</p>
            <p>Size: ${item.size}</p>
        </div>
    `;
});