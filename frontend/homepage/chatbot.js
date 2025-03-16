document.addEventListener('DOMContentLoaded', function() {
    const chatIcon = document.getElementById('chat-icon');
    const chatBox = document.getElementById('chat-box');
    const chatPopup = document.getElementById('chat-popup');
    const closePopup = document.getElementById('close-popup');
    const sendButton = document.getElementById('send-button');
    const userInput = document.getElementById('user-input');
    const clearChatButton = document.getElementById('clear-chat');
    const closeChatButton = document.getElementById('close-chat');
    const chatMessages = document.getElementById('chat-messages');
    
    let lastActivityTime = new Date().getTime();
    let popupTimer = null;
    let isPopupVisible = false;
    
    // Predefined responses to simulate AI
    const predefinedResponses = [
        "I'm Sayam AI, your personal assistant for this website.",
        "I can help you learn about Sayam's projects and skills.",
        "Sayam has expertise in full-stack development with hbs, css, js  Node.js, and Python and C.",
        "Did you know Sayam has worked on several AI and machine learning projects?",
        "Sayam's portfolio includes web applications, mobile apps, and data science projects.",
        "Ask me about Sayam's experience with cloud technologies like AWS and Azure.",
        "I can tell you about Sayam's education and professional background.",
        "Would you like to know about Sayam's recent projects?",
        "Sayam is passionate about creating intuitive user experiences and robust backend systems.",
        "Did you know that Sayam is currently studying at Adamas University?",
        "Sayam has created various websites like a Coca-Cola clone and an Air India clone, showcasing his web development skills.",
        "Sayam loves playing cricket and is constantly honing his coding skills through various projects.",
        "Sayam is focused on learning more about web technologies and improving his coding proficiency through real-world applications.",
        "Ask about Sayam's interest in cloud computing or his favorite programming languages like Python and JavaScript.",
        "You can ask me for more information about Sayam's work on building responsive websites using HTML, CSS, and JavaScript.",
        "Sayam has experience in designing and developing fully responsive websites that adapt to different screen sizes.",
        "Have you checked out Sayam's work on WebRTC, allowing for real-time communication on the web?",
        "You can also ask about Sayam's API development skills using Node.js and Express to create dynamic web applications.",
        "Did you know Sayam has worked with MongoDB for building backend systems that store data efficiently?",
        "Sayam is actively learning new coding frameworks and tools to stay ahead in the ever-evolving field of web development.",
        "Sayam's knowledge of CSS helps him create visually appealing and user-friendly interfaces for websites.",
        "Would you like to learn more about Sayam's approach to project management and collaboration on development teams?",
        "Sayam uses Git and GitHub to version control his projects, ensuring smooth collaboration and workflow management.",
        "Ask me how Sayam integrates AI and machine learning into his projects, improving user experience and system performance."
    ];
    
    
    // Show popup message after page load
    function showPopupAfterLoad() {
        setTimeout(() => {
            if (!chatBox.classList.contains('open')) {
                showPopup();
            }
        }, 2000); // Show popup 2 seconds after page load
    }
    
    // Show popup message
    function showPopup() {
        if (!isPopupVisible && !chatBox.classList.contains('open')) {
            chatPopup.style.display = 'block';
            setTimeout(() => {
                chatPopup.classList.add('show');
                isPopupVisible = true;
            }, 100);
        }
    }
    
    // Hide popup message
    function hidePopup() {
        chatPopup.classList.remove('show');
        setTimeout(() => {
            chatPopup.style.display = 'none';
            isPopupVisible = false;
        }, 300);
    }
    
    // Close popup when X is clicked
    closePopup.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent triggering chat open
        hidePopup();
        resetInactivityTimer();
    });
    
    // Setup inactivity timer for showing popup after 5 min
    function resetInactivityTimer() {
        lastActivityTime = new Date().getTime();
        clearTimeout(popupTimer);
        popupTimer = setTimeout(() => {
            const currentTime = new Date().getTime();
            const elapsedTime = currentTime - lastActivityTime;
            
            // If 5 minutes have passed without activity
            if (elapsedTime >= 5 * 60 * 1000) {
                showPopup();
            }
        }, 5 * 60 * 1000); // 5 minutes
    }
    
    // Track user activity
    document.addEventListener('mousemove', resetInactivityTimer);
    document.addEventListener('keypress', resetInactivityTimer);
    document.addEventListener('click', resetInactivityTimer);
    document.addEventListener('scroll', resetInactivityTimer);
    
    // Initialize with welcome message
    function initialize() {
        setTimeout(() => {
            addBotMessageWithTyping("Hello! I'm Sayam's AI assistant. Ask me anything about Sayam's skills, projects, or experience!");
        }, 500);
    }
    
    // Toggle chat open/close
    chatIcon.addEventListener('click', function() {
        hidePopup();
        
        if (chatBox.classList.contains('open')) {
            chatBox.classList.remove('open');
            chatBox.classList.add('closed');
            setTimeout(() => {
                chatBox.style.display = 'none';
            }, 300);
        } else {
            chatBox.style.display = 'flex';
            setTimeout(() => {
                chatBox.classList.add('open');
                chatBox.classList.remove('closed');
                
                // If first time opening, initialize
                if (chatMessages.children.length === 0) {
                    initialize();
                }
            }, 10);
        }
        
        resetInactivityTimer();
    });
    
    // Close chat when X is clicked
    closeChatButton.addEventListener('click', function() {
        chatBox.classList.remove('open');
        chatBox.classList.add('closed');
        setTimeout(() => {
            chatBox.style.display = 'none';
        }, 300);
        resetInactivityTimer();
    });
    
    // Clear chat history
    clearChatButton.addEventListener('click', function() {
        while (chatMessages.firstChild) {
            chatMessages.removeChild(chatMessages.firstChild);
        }
        initialize();
        resetInactivityTimer();
    });
    
    // Send message on button click
    sendButton.addEventListener('click', function() {
        sendUserMessage();
    });
    
    // Send message on Enter key
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });
    
    // Function to send user message
    function sendUserMessage() {
        const message = userInput.value.trim();
        if (!message) return;
        
        // Add user message to chat
        addUserMessage(message);
        userInput.value = '';
        
        // Generate AI response
        setTimeout(() => {
            // Get random response from predefined list or use API
            const randomIndex = Math.floor(Math.random() * predefinedResponses.length);
            const aiResponse = predefinedResponses[randomIndex];
            
            // Add AI response with typing effect
            addBotMessageWithTyping(aiResponse);
            
            // In production, replace with actual API call:
            /*
            fetch('http://localhost:3000/ask', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: message })
            })
            .then(response => response.json())
            .then(data => {
                addBotMessageWithTyping(data.answer);
            })
            .catch(error => {
                addBotMessageWithTyping("Sorry, I encountered an error. Please try again later.");
            });
            */
        }, 500);
        
        resetInactivityTimer();
    }
    
    // Add user message to chat
    function addUserMessage(text) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message user-message';
        messageElement.innerHTML = `<div class="message-content">${text}</div>`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Add bot message with typing indicator
    function addBotMessageWithTyping(text) {
        // Create typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message bot-message typing';
        typingIndicator.innerHTML = `
            <div class="bot-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Calculate typing delay based on message length (more realistic)
        const typingDelay = Math.min(1500, Math.max(800, text.length * 20));
        
        // Replace typing indicator with actual message after delay
        setTimeout(() => {
            const messageElement = document.createElement('div');
            messageElement.className = 'message bot-message';
            
            // Create the message container with avatar
            messageElement.innerHTML = `
                <div class="bot-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content"></div>
            `;
            
            // Replace typing indicator with actual message
            chatMessages.replaceChild(messageElement, typingIndicator);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // Get the message content element
            const messageContent = messageElement.querySelector('.message-content');
            
            // Animated typing effect for the bot's response
            let i = 0;
            function typeNextChar() {
                if (i < text.length) {
                    messageContent.textContent += text.charAt(i);
                    i++;
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                    
                    // Random typing speed for more realistic effect
                    const randomDelay = Math.floor(Math.random() * 30) + 20;
                    setTimeout(typeNextChar, randomDelay);
                }
            }
            
            typeNextChar();
        }, typingDelay);
    }
    
    // Initialize popup and inactivity timer
    showPopupAfterLoad();
    resetInactivityTimer();
});