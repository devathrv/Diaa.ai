import gradio as gr

def diaa_bot(input_text):
    # Simple logic: You can later connect memory, mood, etc.
    if "love" in input_text.lower():
        return "Aww 🥺, I love you too! 💖"
    elif "hello" in input_text.lower():
        return "Hii Shivansh! 🫶 I'm here for you!"
    else:
        return "Hmm... batao aur kya chal raha hai 😌"

iface = gr.Interface(fn=diaa_bot,
                     inputs="text",
                     outputs="text",
                     title="Diaa AI 💫",
                     description="Private Emotional AI for Shivansh 💕")

iface.launch()
