const botResponses = {
    '你好': ['你好！很高興見到你！', '哈囉！有什麼我可以幫你的嗎？', '你好啊！今天過得如何？'],
    '再見': ['再見！祝您有愉快的一天！', '下次見！', '再見，歡迎隨時回來找我聊天！'],
    '謝謝': ['不客氣！', '這是我應該做的！', '很高興能幫上忙！'],
    '天氣': ['今天天氣真不錯呢！', '要記得帶傘哦！', '是個適合出門的好天氣！'],
    '時間': ['現在是' + new Date().toLocaleTimeString(), '讓我看看，現在是' + new Date().toLocaleTimeString()],
    '名字': ['我是智能客服小幫手！', '你可以叫我小幫手！', '我是24小時在線的客服機器人！'],
    'default': ['抱歉，我不太明白你的意思。請換個方式問我吧！', '這個問題有點難，能請你換個方式說明嗎？', '讓我想想...你能具體說明一下嗎？']
};

function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

function addMessage(message, isUser = false) {
    const messagesDiv = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function getBotResponse(message) {
    for (let key in botResponses) {
        if (message.toLowerCase().includes(key)) {
            return getRandomResponse(botResponses[key]);
        }
    }
    return getRandomResponse(botResponses.default);
}

function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    
    if (message !== '') {
        addMessage(message, true);
        input.value = '';
        
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessage(botResponse, false);
        }, 500);
    }
}

document.getElementById('message-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

window.onload = function() {
    setTimeout(() => {
        addMessage('你好！我是智能客服小幫手！很高興為您服務！', false);
        addMessage('有什麼我可以幫您的嗎？', false);
    }, 500);
} 