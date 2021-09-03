// DOM Queries
const chatList = document.querySelector(".chat-list");

// Class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("gaming", "curtis");

// Get Chats & Render
chatroom.getChats((data) => chatUI.render(data));
