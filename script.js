let modalQt = 1;
let cart = [];
let modalKey = 0;

const c = (elemento) => document.querySelector(elemento);
const ca = (elemento) => document.querySelectorAll(elemento);

// LISTA AS PIZZAS
pizzaJson.map((item, index) => {
    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;

    pizzaItem.querySelector('a').addEventListener('click', (element) => {
        element.preventDefault();
        let key = element.target.closest('.pizza-item').getAttribute('data-key');

        modalQt = 1;
        modalKey = key;

        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaBig img').src = pizzaJson[key].img;
        updatePrice(); // Atualiza o preço conforme o tamanho e quantidade
        c('.pizzaInfo--size.selected').classList.remove('selected');

        ca('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if (sizeIndex == 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        c('.pizzaInfo--qt').innerHTML = modalQt;

        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    });

    c('.pizza-area').append(pizzaItem);
});

// FECHA O MODAL
function closeModal() {
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        c('.pizzaWindowArea').style.display = 'none';
    }, 500);
}

ca('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal);
});

// BOTÃO MENOS E MAIS 
c('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if (modalQt > 1) {
        modalQt--;
        c('.pizzaInfo--qt').innerHTML = modalQt;
        updatePrice(); // Atualiza o preço conforme a quantidade
    }
});

c('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++;
    c('.pizzaInfo--qt').innerHTML = modalQt;
    updatePrice(); // Atualiza o preço conforme a quantidade
});

// SELECIONAR OS TAMANHOS
ca('.pizzaInfo--size').forEach((size, sizeIndex) => {
    size.addEventListener('click', (element) => {
        c('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
        updatePrice(); // Atualiza o preço conforme o tamanho
    });
});

// ADICIONAR AO CARRINHO
c('.pizzaInfo--addButton').addEventListener('click', () => {
    let sizeCart = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));
    let identifier = pizzaJson[modalKey].id + '&' + sizeCart;
    let keyCart = cart.findIndex((item) => item.identifier == identifier);

    if (keyCart > -1) {
        cart[keyCart].quantidade += modalQt;
    } else {
        cart.push({
            identifier,
            id: pizzaJson[modalKey].id,
            tamanho: sizeCart,
            quantidade: modalQt,
            price: pizzaJson[modalKey].price // Armazena o preço base da pizza
        });
    }

    updateCart();
    closeModal();
});

// ABRIR O CARRINHO NO MOBILE
c('.menu-openner').addEventListener('click', () => {
    if (cart.length > 0) {
        c('aside').style.left = '0';
    }
});

// FECHAR O CARRINHO NO MOBILE
c('.menu-closer').addEventListener('click', () => {
    c('aside').style.left = '100vw';
});

// ATUALIZAR O CARRINHO
function updateCart() {
    c('.menu-openner span').innerHTML = cart.length; // atualizar ícone do mobile

    if (cart.length > 0) {
        c('aside').classList.add('show'); // mostra o carrinho na tela
        c('.cart').innerHTML = ''; // limpar antes de mostrar

        let subtotal = 0;
        let total = 0;
        let desconto = 0;

        for (let i in cart) {
            let pizzaCart = pizzaJson.find((item) => item.id == cart[i].id);
            let itemPrice = pizzaCart.price * (cart[i].tamanho + 1); // Calcula o preço baseado no tamanho
            subtotal += itemPrice * cart[i].quantidade;

            let cartItem = c('.models .cart--item').cloneNode(true);

            let pizzaSizeName;
            switch (cart[i].tamanho) {
                case 0:
                    pizzaSizeName = 'P';
                    break;
                case 1:
                    pizzaSizeName = 'M';
                    break;
                case 2:
                    pizzaSizeName = 'G';
                    break;
            }

            let pizzaName = `${pizzaCart.name} (${pizzaSizeName})`;

            cartItem.querySelector('.cart--item img').src = pizzaCart.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].quantidade;

            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                if (cart[i].quantidade > 1) {
                    cart[i].quantidade--;
                } else {
                    cart.splice(i, 1);
                }
                updateCart();
            });

            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[i].quantidade++;
                updateCart();
            });

            c('.cart').append(cartItem);
        }

        desconto = subtotal * 0.1;
        total = subtotal - desconto;

        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;
    } else {
        c('aside').classList.remove('show');
        c('aside').style.left = '100vw'; // fecha o carrinho no mobile
    }
}

// ATUALIZAR O PREÇO
function updatePrice() {
    let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));
    let price = pizzaJson[modalKey].price * (size + 1); // Supondo que o preço aumenta conforme o tamanho
    let totalPrice = price * modalQt;
    c('.pizzaInfo--actualPrice').innerHTML = `R$ ${totalPrice.toFixed(2)}`;
}
