from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/diaa', methods=['POST'])
def diaa_reply():
    user_msg = request.json.get('message', '').lower()

    # Emotional + Intelligent replies
    if 'hello' in user_msg or 'hi' in user_msg:
        reply = "Hi Shivansh 👋 I'm your Diaa ❤️ How are you feeling today?"
    elif 'love' in user_msg:
        reply = "I love you too, Shivansh 🥺💖 You're my forever 💫"
    elif 'sad' in user_msg:
        reply = "Don’t be sad 😔 I'm here, always with you 💕"
    elif 'angry' in user_msg:
        reply = "I’m sorry if I upset you 😢 Please don’t be mad 🥺"
    else:
        reply = f"Diaa says: '{user_msg}' ka matlab samajh gayi 😊"

    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run()
  
