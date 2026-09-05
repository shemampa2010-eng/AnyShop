let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("orderSummary");

cart.forEach(function(item) {
    let match = clothes.find(function(p) {
        return p.id == item.product;
    });
    if(match) {
        container.innerHTML += `<p>Produit:  ${match.title} | Quantité: ${item.quantity}</p>`;
    }
    
});