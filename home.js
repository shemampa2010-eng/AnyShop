let productsContainer = document.getElementById("products");

clothes.forEach(function(product) {

    productsContainer.innerHTML += `
        <div class="product" data-id="${product.id}">
            <img class="product-image" src="${product.images[0]}">
            <h2>${product.title}</h2>
            <p>$${product.price}</p>
            <button class= "add">add to cart</button>
        </div>
    `;

});

let addToCart = document.querySelectorAll(".add")
let boxes = document.querySelectorAll(".product");

addToCart.forEach(function(button){
  button.addEventListener("click", function () {
    console.log(button.parentElement.dataset.id)
  })
})

boxes.forEach(function(box) {

    box.addEventListener("click", function() {

        let id = box.dataset.id;

        window.location.href = `product.html?id=${id}`;

    });

});

let women = document.getElementById("Femme");
let men = document.getElementById("Homme");
let womenClothes = clothes.filter(function(product){
  return product.category === "women's clothing"
})

let menClothes = clothes.filter(function(product){
  return product.category === "men's clothing"
})
let unisex = document.getElementById("Unisex");
let unisexClothes = clothes.filter(function(product) {
    return product.category === "unisex";
});


women.addEventListener("click", function() {

    productsContainer.innerHTML = "";

    womenClothes.forEach(function(product) {
        productsContainer.innerHTML += `
            <div class="product">
                <img src="${product.images[0]}" width="200">
                <h2>${product.title}</h2>
                <p>$${product.price}</p>
            </div>
        `;
    });

});

men.addEventListener("click", function() {

    productsContainer.innerHTML = "";

      menClothes.forEach(function(product) {
        productsContainer.innerHTML += `
            <div class="product">
                <img src="${product.images[0]}" width="200">
                <h2>${product.title}</h2>
                <p>$${product.price}</p>
            </div>
        `;
    });

});

unisex.addEventListener("click", function() {

    productsContainer.innerHTML = "";

    unisexClothes.forEach(function(product) {
        productsContainer.innerHTML += `
            <div class="product">
                <img src="${product.images[0]}" width="200">
                <h2>${product.title}</h2>
                <p>$${product.price}</p>
            </div>
        `;
    });

});