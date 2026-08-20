let head = document.getElementById("head");

head.innerHTML = `
    <header>
        <img src="logo.jpeg" alt="logo">
    </header>

    <nav>
        <a href="home.html">Home</a>
        <a href="home.html?category=women">Femme</a>
        <a href="home.html?category=men">Homme</a>
        <a href="home.html?category=unisex">Unisex</a>

        <a href="cart.html" class="cart">
            Cart <span id="cartCount">0</span>
        </a>
    </nav>
`;

let savedCart = JSON.parse(localStorage.getItem("cart")) || [];


cartCount.textContent = savedCart.length;