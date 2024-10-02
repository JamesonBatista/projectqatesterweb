document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const customAlert = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    const closeAlert = document.getElementById('closeAlert');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (validateEmail(email) && password) {
            window.location.href = 'cadastro-simples.html';
        } else {
            showAlert('Por favor, insira um email válido e uma senha.');
        }
    });

    closeAlert.addEventListener('click', function () {
        customAlert.style.display = 'none';
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    function showAlert(message) {
        alertMessage.textContent = message;
        customAlert.style.display = 'block';
    }
});
