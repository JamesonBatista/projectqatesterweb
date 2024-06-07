document.addEventListener('DOMContentLoaded', () => {
    const pizzaForm = document.getElementById('pizzaForm');
    const totalElement = document.getElementById('total');

    pizzaForm.addEventListener('change', updateTotal);

    function updateTotal() {
        let total = 0;

        const tamanho = document.querySelector('input[name="tamanho"]:checked');
        if (tamanho) {
            total += parseFloat(tamanho.getAttribute('data-valor'));
        }

        const sabores = document.querySelectorAll('input[name="sabores"]:checked');
        sabores.forEach(sabor => {
            total += parseFloat(sabor.getAttribute('data-valor'));
        });

        const bebidas = document.querySelectorAll('input[name="bebidas"]:checked');
        bebidas.forEach(bebida => {
            total += parseFloat(bebida.getAttribute('data-valor'));
        });

        totalElement.textContent = total.toFixed(2);
        sessionStorage.setItem('total', total.toFixed(2));
    }
});
