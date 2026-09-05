let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("orderSummary");

let subtotalElement = document.getElementById("subtotal");

let finalTotalElement = document.getElementById("finalTotal");

let total = 0;

let shippingFee = 5.00;

let checkoutForm = document.getElementById("Payer");

cart.forEach(function(item) {
    let match = clothes.find(function(p) {
        return p.id == item.product;
    });
    
    if(match) {
        container.innerHTML += `<p>Produit:  ${match.title} | Quantité: ${item.quantity}</p>`;
        
        let itemTot = match.price * item.quantity;
        total = total + itemTot;
        console.log(total);
    }
});

subtotalElement.textContent = `$${total.toFixed(2)}`;

let finalTotal = total + shippingFee;
finalTotalElement.textContent = `$${finalTotal.toFixed(2)}`;

checkoutForm.addEventListener("click", function(event){
    event.preventDefault();

    if(cart.length === 0){
        alert("Cart empty");
        return;
    }
    
    localStorage.removeItem("cart");
    location.reload(); 
});