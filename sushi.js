document.addEventListener('DOMContentLoaded', function() {
    const sushiItems = {
        "nigiri-sushi": [
            { id: 1, name: "Nigiri", price: 10.00, img: "images/Nigiri.webp" },
            { id: 2, name: "Nigiri", price: 12.00, img: "images/Nirigir2.jpeg" }
        ],
        "hossomaki": [
            { id: 3, name: "Hossomaki", price: 15.00, img: "images/homo.jpeg" },
            { id: 4, name: "Hossomaki 2", price: 18.00, img: "images/homo2.jpeg" }
        ],
        "temaki": [
            { id: 5, name: "Temaki", price: 20.00, img: "images/temaki.webp" },
            { id: 6, name: "Temaki Frito", price: 22.00, img: "images/temaki2.webp" }
        ],
        "uramaki": [
            { id: 7, name: "Uramaki", price: 25.00, img: "images/ura.jpeg" },
            { id: 8, name: "Uramaki", price: 28.00, img: "images/ura2.webp" }
        ],
        "futomaki": [
            { id: 9, name: "Futomaki", price: 30.00, img: "images/futo.jpeg" },
            { id: 10, name: "Futomaki", price: 32.00, img: "images/futo2.jpeg" }
        ],
        "hot-roll": [
            { id: 11, name: "Hot Roll", price: 35.00, img: "images/hot.jpeg" },
            { id: 12, name: "Hot Roll", price: 38.00, img: "images/hot2.jpeg" }
        ],
        "sashimi": [
            { id: 13, name: "Sashimi", price: 40.00, img: "images/sa.jpeg" },
            { id: 14, name: "Sashimi", price: 42.00, img: "images/sa2.avif.avif" }
        ]
    };

    const cartTotalElement = document.getElementById('total');
    const subtotalElement = document.getElementById('subtotal');
    const descontoElement = document.getElementById('desconto');
    const cartItemsElement = document.querySelector('.cart');
    const cartSidebar = document.querySelector('aside');
    const menuOpenner = document.querySelector('.menu-openner');
    const menuCloser = document.querySelector('.menu-closer');
    let cartTotal = 0;
    const cart = [];

    function renderSushiItems(category) {
        const container = document.getElementById(category);
        container.innerHTML = '';
        sushiItems[category].forEach(item => {
            const div = document.createElement('div');
            div.classList.add('sushi-item');
            div.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Preço: R$ ${item.price.toFixed(2)}</p>
                <div class="quantity-control">
                    <button class="decrease-quantity">-</button>
                    <span class="quantity">1</span>
                    <button class="increase-quantity">+</button>
                </div>
                <button class="add-to-cart" data-id="${item.id}" data-price="${item.price}">Adicionar ao Carrinho</button>
            `;
            container.appendChild(div);
        });
        setupEventListeners();
    }

    function switchTab() {
        const tabs = document.querySelectorAll('.tab');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(tc => tc.classList.remove('active'));

                tab.classList.add('active');
                document.getElementById(tab.dataset.tab).classList.add('active');
                setupEventListeners(); // Update event listeners for the new tab content
            });
        });
    }

    function setupEventListeners() {
        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.removeEventListener('click', increaseQuantity);
            button.addEventListener('click', increaseQuantity);
        });

        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.removeEventListener('click', decreaseQuantity);
            button.addEventListener('click', decreaseQuantity);
        });

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.removeEventListener('click', addToCartHandler);
            button.addEventListener('click', addToCartHandler);
        });
    }

    function increaseQuantity(event) {
        const quantityElement = event.target.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
    }

    function decreaseQuantity(event) {
        const quantityElement = event.target.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
        }
    }

    function addToCartHandler(event) {
        const id = parseInt(event.target.getAttribute('data-id'));
        const price = parseFloat(event.target.getAttribute('data-price'));
        const quantity = parseInt(event.target.previousElementSibling.querySelector('.quantity').textContent);
        const sushiName = event.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        addToCart(id, sushiName, price, quantity);
    }

    function addToCart(id, name, price, quantity) {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ id, name, price, quantity });
        }
        cartTotal += price * quantity;
        updateCartItems();
        updateCartTotal();
        cartSidebar.classList.add('open');
    }

    menuOpenner.addEventListener('click', () => {
        cartSidebar.classList.add('open');
    });

    menuCloser.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
    });

    document.querySelector('.cart--finalizar').addEventListener('click', () => {
        showAlert('Compra finalizada! Total: R$ ' + cartTotal.toFixed(2));
        cart.length = 0;
        cartTotal = 0;
        updateCartItems();
        updateCartTotal();
        cartSidebar.classList.remove('open');
    });

    function updateCartItems() {
        cartItemsElement.innerHTML = '';
        cart.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('cart--item');
            div.innerHTML = `
                <img src="${sushiItems[getCategoryById(item.id)].find(sushi => sushi.id === item.id).img}" />
                <div class="cart--item-nome">${item.name}</div>
                <div class="cart--item--qtarea">
                    <button class="cart--item-qtmenos" data-id="${item.id}">-</button>
                    <div class="cart--item--qt">${item.quantity}</div>
                    <button class="cart--item-qtmais" data-id="${item.id}">+</button>
                </div>
            `;
            div.querySelector('.cart--item-qtmenos').addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const item = cart.find(item => item.id === id);
                if (item.quantity > 1) {
                    item.quantity--;
                    cartTotal -= item.price;
                    updateCartTotal();
                    updateCartItems();
                }
            });
            div.querySelector('.cart--item-qtmais').addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const item = cart.find(item => item.id === id);
                item.quantity++;
                cartTotal += item.price;
                updateCartTotal();
                updateCartItems();
            });
            cartItemsElement.appendChild(div);
        });
    }

    function updateCartTotal() {
        let subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        let desconto = subtotal * 0.1;
        let total = subtotal - desconto;

        subtotalElement.textContent = subtotal.toFixed(2);
        descontoElement.textContent = desconto.toFixed(2);
        cartTotalElement.textContent = total.toFixed(2);

        menuOpenner.querySelector('span').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    function showAlert(message) {
        const alertBox = document.querySelector('.custom-alert');
        alertBox.querySelector('p').textContent = message;
        alertBox.classList.add('show');
        setTimeout(() => {
            alertBox.classList.remove('show');
        }, 3000);
    }

    function getCategoryById(id) {
        for (const category in sushiItems) {
            if (sushiItems[category].some(sushi => sushi.id === id)) {
                return category;
            }
        }
        return null;
    }

    // Inicialização
    for (const category in sushiItems) {
        renderSushiItems(category);
    }
    switchTab();
    setupEventListeners();
});
