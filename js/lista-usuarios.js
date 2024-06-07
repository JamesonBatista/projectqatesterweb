document.addEventListener('DOMContentLoaded', function () {
    const userList = document.getElementById('userList');
    const customAlert = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    const closeAlert = document.getElementById('closeAlert');

    closeAlert.addEventListener('click', function () {
        customAlert.style.display = 'none';
    });

    function showAlert(message) {
        alertMessage.textContent = message;
        customAlert.style.display = 'block';
    }

    function loadUsers() {
        const users = JSON.parse(localStorage.getItem('usuarios')) || [];
        userList.innerHTML = '';

        users.forEach((user, index) => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = user.name;
            row.appendChild(nameCell);

            const emailCell = document.createElement('td');
            emailCell.textContent = user.email;
            row.appendChild(emailCell);

            const actionsCell = document.createElement('td');

            // const editButton = document.createElement('button');
            // editButton.textContent = 'Editar';
            // editButton.classList.add('edit');
            // editButton.addEventListener('click', () => editUser(index));
            // actionsCell.appendChild(editButton);

            const detailsButton = document.createElement('button');
            detailsButton.textContent = 'Detalhes';
            detailsButton.classList.add('details');
            detailsButton.addEventListener('click', () => viewDetails(index));
            actionsCell.appendChild(detailsButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', () => deleteUser(index));
            actionsCell.appendChild(deleteButton);

            row.appendChild(actionsCell);

            userList.appendChild(row);
        });
    }

    function editUser(index) {
        const users = JSON.parse(localStorage.getItem('usuarios')) || [];
        const user = users[index];
        const queryParams = new URLSearchParams(user).toString();
        window.location.href = `cadastro.html?index=${index}&${queryParams}`;
    }

    function viewDetails(index) {
        window.location.href = `detalhes-usuario.html?index=${index}`;
    }

    function deleteUser(index) {
        let users = JSON.parse(localStorage.getItem('usuarios')) || [];
        users.splice(index, 1);
        localStorage.setItem('usuarios', JSON.stringify(users));
        showAlert('Usuário excluído com sucesso!');
        loadUsers();
    }

    loadUsers();
});
