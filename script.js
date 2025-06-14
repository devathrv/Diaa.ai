function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value.trim();
  if (!userText) return;

  chatBox.innerHTML += `<div><b>You:</b> ${userText}</div>`;
  const response = getDiaaResponse(userText);
  chatBox.innerHTML += `<div><b>Diaa:</b> ${response}</div>`;

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Basic intelligent logic
function getDiaaResponse(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("your name")) {
    return "I am Diaa, your intelligent AI assistant.";
  } else if (msg.includes("who are you")) {
    return "I'm Diaa, created to help and answer your questions.";
  } else if (msg.includes("how are you")) {
    return "I'm functioning at full capacity. How can I assist you?";
  } else if (msg.includes("what is ai")) {
    return "AI stands for Artificial Intelligence. It enables machines to mimic human intelligence.";
  } else if (msg.includes("thank")) {
    return "You're welcome! Let me know if you have any more questions.";
  } else {
    return "That's interesting. I'm still learning. Could you ask in another way?";
  }
}
