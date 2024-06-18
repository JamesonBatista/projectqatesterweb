let selectedUser = '';

const contacts = {
    user1: {
        name: 'Maria',
        image: './images/maria.png'
    },
    user2: {
        name: 'João',
        image: './images/joao.webp'
    }
};

document.querySelectorAll('.contact').forEach(contact => {
    contact.addEventListener('click', function() {
        selectedUser = this.getAttribute('data-user');
        const contactInfo = contacts[selectedUser];
        document.getElementById('chatHeaderName').textContent = contactInfo.name;
        document.getElementById('chatHeaderImage').src = contactInfo.image;
    });
});

document.getElementById('sendMessage').addEventListener('click', function() {
    if (selectedUser) {
        sendMessage(selectedUser);
    } else {
        alert('Please select a user to send a message');
    }
});

function sendMessage(user) {
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();
    
    if (messageText !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', user);
        
        const messageTextElement = document.createElement('div');
        messageTextElement.classList.add('message-text');
        messageTextElement.textContent = messageText;
        
        const timestampElement = document.createElement('div');
        timestampElement.classList.add('timestamp');
        const now = new Date();
        const timeString = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
        timestampElement.textContent = timeString;

        // const checkImg = document.createElement('img');
        // checkImg.src = 'images/check.png'; // Assuming check.png is the image of the double check
        // timestampElement.appendChild(checkImg);
        
        messageElement.appendChild(messageTextElement);
        messageElement.appendChild(timestampElement);
        
        document.getElementById('chatWindow').appendChild(messageElement);
        messageInput.value = '';
        messageElement.scrollIntoView();
    }
}
