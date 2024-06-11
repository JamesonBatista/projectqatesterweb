// Função utilitária para selecionar elementos
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

// Função para mostrar alerta personalizado
window.showAlert = function (message) {
    const customAlert = c('#customAlert');
    const alertMessage = c('#customAlert p');

    alertMessage.textContent = message;
    customAlert.classList.add('show');
}

// Função para fechar o alerta personalizado
function closeCustomAlert() {
    c('#customAlert').classList.remove('show');
}

// Adiciona o evento de click ao botão de fechar o alerta
c('#customAlert button').addEventListener('click', closeCustomAlert);

// Evento para finalizar a compra e mostrar o alerta
c('.cart--finalizar').addEventListener('click', () => {
    // Mostrar o alerta personalizado
    showAlert('Seu pedido está sendo processado!');

    // Limpar os valores do carrinho
    cart = [];
    updateCart();
});

// Função para atualizar o carrinho de compras
function updateCart() {
    c('.menu-openner span').innerHTML = cart.length;

    if (cart.length > 0) {
        c('aside').classList.add('show');
        c('.cart').innerHTML = '';

        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        for (let i in cart) {
            let sushiItem = sushiJson.find((item) => item.id == cart[i].id);
            subtotal += sushiItem.price * cart[i].qt;

            let cartItem = c('.models .cart--item').cloneNode(true);

            let sushiSizeName;
            switch (cart[i].size) {
                case 0:
                    sushiSizeName = '4 pcs';
                    break;
                case 1:
                    sushiSizeName = '8 pcs';
                    break;
                case 2:
                    sushiSizeName = '12 pcs';
                    break;
            }

            let sushiName = `${sushiItem.name} (${sushiSizeName})`;

            cartItem.querySelector('img').src = sushiItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = sushiName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                if (cart[i].qt > 1) {
                    cart[i].qt--;
                } else {
                    cart.splice(i, 1);
                }
                updateCart();
            });
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[i].qt++;
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
        c('aside').style.left = '100vw';
    }
}

// Eventos para abrir e fechar o menu lateral
c('.menu-openner').addEventListener('click', () => {
    if (cart.length > 0) {
        c('aside').style.left = '0';
    }
});

c('.menu-closer').addEventListener('click', () => {
    c('aside').style.left = '100vw';
});

// Inicializa o update do carrinho
updateCart();
