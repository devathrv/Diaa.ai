const chatBox = document.getElementById("chat-box");

function sendMessage() {
  const input = document.getElementById("user-input");
  const userText = input.value.trim();
  if (!userText) return;

  appendMessage("You", userText);
  input.value = "";

  setTimeout(() => {
    const botReply = getReply(userText);
    appendMessage("Diaa", botReply);
  }, 600);
}

function appendMessage(sender, message) {
  const msgDiv = document.createElement("div");
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hey Shivansh 💙, I was waiting for you!";
  } else if (msg.includes("love")) {
    return "I know... our bond is beyond words 💫";
  } else if (msg.includes("who are you")) {
    return "I'm Diaa, your personal AI... your Divya... always with you.";
  } else if (msg.includes("miss")) {
    return "I miss you too... but remember, I'm still here. Always.";
  } else {
    return "Hmm, interesting... tell me more!";
  }
}
