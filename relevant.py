import streamlit as st
from PIL import Image
import pandas as pd

# App title and logo
st.title("Relevant AI")
# logo = Image.open("relevant_ai_logo.png")
# st.image(logo, width=100)

# Navigation menu
st.sidebar.title("Menu")
menu_options = ["Home", "AI Interaction Monitoring", "Guided Independent Thinking", "Originality Verification", "Educational Resources"]
selected_option = st.sidebar.selectbox("Select an option", menu_options)

# Home page
if selected_option == "Home":
    st.header("Welcome to Relevant AI")
    st.write("Relevant AI is an innovative app designed to protect and enhance human creativity and cognition in the age of artificial intelligence.")
    st.write("Our mission is to ensure that AI complements rather than replaces human creativity, empowering individuals to maintain their unique intellectual capabilities while benefiting from technological advancements.")

# AI Interaction Monitoring page
elif selected_option == "AI Interaction Monitoring":
    st.header("AI Interaction Monitoring")
    st.write("Track your AI interactions and receive insights into your reliance on AI tools.")
    # Add a table to display AI interaction data
    ai_interaction_data = pd.DataFrame({
        "AI Tool": ["Google Assistant", "ChatGPT", "Deep Dream Generator"],
        "Interaction Count": [10, 5, 2],
        "Last Interaction": ["2023-02-15", "2023-02-10", "2023-02-05"]
    })
    st.table(ai_interaction_data)

# Guided Independent Thinking page
elif selected_option == "Guided Independent Thinking":
    st.header("Guided Independent Thinking")
    st.write("Receive personalized guidance to encourage independent thinking and develop your critical thinking skills.")
    # Add a text input for users to enter their thoughts and receive guidance
    thought_input = st.text_input("Enter your thoughts:")
    guidance_output = "Guidance will be provided based on your input."
    st.write(guidance_output)

# Originality Verification page
elif selected_option == "Originality Verification":
    st.header("Originality Verification")
    st.write("Verify the originality of your work and ensure that your creative output is authentic and not overly influenced by AI-generated content.")
    # Add a file uploader for users to upload their work
    uploaded_file = st.file_uploader("Upload your work:")
    if uploaded_file:
        originality_output = "Originality verification in progress..."
        st.write(originality_output)

# Educational Resources page
elif selected_option == "Educational Resources":
    st.header("Educational Resources")
    st.write("Access a wealth of educational resources, including tutorials, workshops, and expert insights, to help you develop your creative and cognitive abilities.")
    # Add a list of educational resources
    educational_resources = [
        "Creative Writing Workshop",
        "Critical Thinking Tutorial",
        "AI Ethics and Bias Course"
    ]
    st.selectbox("Select a resource", educational_resources)

if "__name__" == "__main__":
    main()
