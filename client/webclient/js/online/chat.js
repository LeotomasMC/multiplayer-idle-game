function chatCacheElements() {
    chatOutput = document.getElementById('chat-log')
    chatInput = document.getElementById('chat-inp')
    chatButton = document.getElementById('chat-button')
}

//function connectButton() {

//}
//document.addEventListener()

function chatSendButton() {
    chatOutput.value += '<br>' + chatInput.value;
}