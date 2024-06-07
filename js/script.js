document.addEventListener('DOMContentLoaded', function () {
    const customAlert = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    const closeAlert = document.getElementById('closeAlert');

    if (closeAlert) {
        closeAlert.addEventListener('click', function () {
            window.location.href = 'lista-usuarios.html';
        });
    }

    window.showAlert = function (message) {
        alertMessage.textContent = message;
        customAlert.style.display = 'block';
    };
});
