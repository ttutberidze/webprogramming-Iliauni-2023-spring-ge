const socket = io();
const query = new URLSearchParams(window.location.search.substring(1));

socket.emit('join', query.get('username'));
socket.on('new-message', (message) => {
    console.log(message);
})

const sendMessage = () => {
    const input = document.getElementById('input');
    socket.emit('message-received', input.value);
    input.value = '';
}