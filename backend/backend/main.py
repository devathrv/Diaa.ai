import gradio as gr

# Simple response function — yaha tu apna AI logic daal sakta hai
def diaa_ai(input_text):
    return "Diaa says: " + input_text

# Gradio UI setup
app = gr.Interface(fn=diaa_ai, inputs="text", outputs="text")

# Server start
app.launch()
