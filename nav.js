let head = document.getElementById("head");

head.innerHTML = `
    <nav id="mainNav">
        <img src="logo.jpeg" alt="logo" id="navLogo">
        <a href="home.html" class="nav-start">Home</a>
        <a href="home.html?category=women">Femme</a>
        <a href="home.html?category=men">Homme</a>
        <a href="home.html?category=unisex">Unisex</a>

        <a href="cart.html" class="cart">
            Cart <span id="cartCount">0</span>
        </a>
    </nav>
`;

let nav = document.getElementById("mainNav");
let logo = document.getElementById("navLogo");
let firstLink = document.querySelector(".nav-start");

if (nav) {
    nav.style.display = "flex";
    nav.style.alignItems = "center";
    nav.style.gap = "20px";         
    nav.style.padding = "10px 20px";  
}


if (logo) {
    logo.style.height = "65px"; 
    logo.style.width = "auto";
}

if (firstLink) {
    firstLink.style.marginLeft = "auto"; 
}

let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
let cartCountElement = document.getElementById("cartCount");

if (cartCountElement) {
    cartCountElement.textContent = savedCart.length;
}