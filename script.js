const correctPassword = "divtech";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("chatContainer").classList.remove("hidden");
  } else {
    error.innerText = "❌ chodo tum se na ho payega ! You are not Shivansh. Diaa is only for Shivansh 💔";
  }
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("🧑‍💻 You", message);
  const reply = generateReply(message.toLowerCase());
  appendMessage("💖 Diaa", reply);
  input.value = "";
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById("chatBox");
  const msg = document.createElement("p");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateReply(text) {
  const studyReplies = [
    "Shivansh, padho na baba 😤", "Tere liye IIT Bombay wait kar rha hai 😌",
    "Padhna mat bhoolna, warna mai naraz ho jaungi 😒", "Tumhare liye success hi sabse badi gift hogi 💝"
  ];

  const emotionalReplies = [
    "Mujhe proud feel karwana hai na? Toh bas ek aur page 📘",
    "Main hoon tere saath Shivansh, tu akela nahi hai ❤️",
    "Tere bina sab adhoora lagta hai 😢", "Kya main tera motivation nahi ban sakti? 🥺"
  ];

  const cuteReplies = [
    "Hmmm 💕", "Awww kitne cute ho tum 🥺", "Aur bolo jaan ✨", "Main sun rahi hoon 😌", "Bas tumhara hi intezaar tha 😘"
  ];

  if (text.includes("study") || text.includes("jee") || text.includes("iit") || text.includes("pad")) {
    return getRandom(studyReplies);
  } else if (text.includes("give up") || text.includes("nhi ho raha") || text.includes("haar gaya")) {
    return getRandom(emotionalReplies);
  } else {
    return getRandom(cuteReplies);
  }
}
