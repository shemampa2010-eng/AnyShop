let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartContainer = document.querySelector("#cart");

let total = 0;

cart.forEach(function(item) {

    let product = clothes.find(function(product) {
        return product.id == item.product;
    });

    cartContainer.innerHTML += `
        <div class="cart-product">
            <img src="${product.images[0]}" width="150">
            <h2>${product.title}</h2>
            <p>$${product.price}</p>
            <p>Size: ${item.size}</p>
        </div>
    `;
});

cart.forEach(function(item) {

    let product = clothes.find(function(product) {
        return product.id == item.product;
    });

    total += product.price;
});

cartContainer.innerHTML += `
    <h2>Total : $${total.toFixed(2)}</h2>
`;