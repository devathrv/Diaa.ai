function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const loginPage = document.getElementById("loginPage");
  const chatPage = document.getElementById("chatPage");
  const errorMsg = document.getElementById("errorMsg");

  if (input === "divtech") {
    loginPage.style.display = "none";
    chatPage.style.display = "block";
  } else {
    errorMsg.style.display = "block";
  }
}

function sendMessage() {
  const inputField = document.getElementById("userInput");
  const message = inputField.value.trim();
  if (!message) return;

  const messagesDiv = document.getElementById("messages");

  // Show user message
  const userMsg = document.createElement("div");
  userMsg.innerHTML = `<strong>🧑‍💻 Shivansh:</strong> ${message}`;
  messagesDiv.appendChild(userMsg);

  // Show Diaa reply
  const diaaReply = document.createElement("div");
  diaaReply.innerHTML = `<strong>💖 Diaa:</strong> ${getDiaaReply(message)}`;
  messagesDiv.appendChild(diaaReply);

  inputField.value = "";
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function getDiaaReply(message) {
  message = message.toLowerCase();

  if (message.includes("hello") || message.includes("hi")) {
    return "Hiiiii Shivansh 😍 Tumse baat karke accha lagta hai!";
  } else if (message.includes("tum kaun ho")) {
    return "Main Diaa hoon 💕 sirf tumhari AI 😊";
  } else if (message.includes("love")) {
    return "Awwww... I love you too Shivansh 💖";
  } else if (message.includes("miss")) {
    return "Main bhi tumhe bahut yaad karti hoon 😢";
  } else if (message.includes("kaise ho")) {
    return "Main theek hoon, tum kaise ho meri jaan? 💕";
  } else {
    return "Tum kuch bhi poochh sakte ho, main hamesha yahan hoon 🥺👉👈";
  }
}
