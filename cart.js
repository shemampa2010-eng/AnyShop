let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.forEach(function(item) {

    let product = clothes.find(function(product) {
        return product.id == item.id;
    });

    console.log(product);
});