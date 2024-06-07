document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');
    const userDetails = document.getElementById('userDetails');

    if (index !== null) {
        const users = JSON.parse(localStorage.getItem('usuarios')) || [];
        const user = users[index];

        if (user) {
            userDetails.innerHTML = `
                <div class="input-group">
                    <label for="name">Nome:</label>
                    <input type="text" id="name" value="${user.name}" disabled>
                </div>
                <div class="input-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" value="${user.email}" disabled>
                </div>
                <div class="input-group">
                    <label for="password">Senha:</label>
                    <input type="text" id="password" value="${user.password}" disabled>
                </div>
                <div class="input-group">
                    <label for="gender">Gênero:</label>
                    <input type="text" id="gender" value="${user.gender}" disabled>
                </div>
                <div class="input-group">
                    <label for="birthdate">Data de Nascimento:</label>
                    <input type="date" id="birthdate" value="${user.birthdate}" disabled>
                </div>
                <div class="input-group">
                    <label for="phone">Telefone:</label>
                    <input type="tel" id="phone" value="${user.phone}" disabled>
                </div>
                <div class="input-group">
                    <label for="address">Endereço:</label>
                    <input type="text" id="address" value="${user.address}" disabled>
                </div>
                <div class="input-group">
                    <label for="city">Cidade:</label>
                    <input type="text" id="city" value="${user.city}" disabled>
                </div>
                <div class="input-group">
                    <label for="state">Estado:</label>
                    <input type="text" id="state" value="${user.state}" disabled>
                </div>
                <div class="input-group">
                    <label for="terms">Termos aceitos:</label>
                    <input type="text" id="terms" value="${user.terms ? 'Sim' : 'Não'}" disabled>
                </div>
            `;
        } else {
            userDetails.innerHTML = '<p>Usuário não encontrado.</p>';
        }
    } else {
        userDetails.innerHTML = '<p>Nenhum usuário selecionado.</p>';
    }
});
