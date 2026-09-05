let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("orderSummary");

cart.forEach(function(item) {
    let match = clothes.find(function(p) {
        return p.id == item.product;
    });
    let total = 0
    if(match) {
        container.innerHTML += `<p>Produit:  ${match.title} | Quantité: ${item.quantity}</p>`;
        
        let itemTot = match.price * item.quantity
        total = total + itemTot
        console.log(total)
    }
    
});