from flask import Flask, render_template, request, redirect, url_for, flash

# Initialize the Flask application
app = Flask(__name__)

# A secret key is required for flashing messages
app.secret_key = 'a_super_secret_key_for_your_project'

@app.route('/')
def home():
    """
    Renders the main portfolio page (index.html).
    Flask automatically looks for this file in the 'templates' folder.
    """
    return render_template('index.html')

@app.route('/submit_form', methods=['POST'])
def submit_form():
    """
    Handles the contact form submission.
    This is a backend example. In a real-world scenario, you would
    process the data here (e.g., save to a database, send an email).
    """
    if request.method == 'POST':
        # Retrieve form data
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        
        # For now, we'll just print it to the console to confirm it works
        print(f"Received submission from: {name} <{email}>")
        print(f"Message: {message}")
        
        # Create a success message to show the user
        flash('Thank you for your message! I will get back to you soon.', 'success')
        
        # Redirect back to the homepage, jumping to the contact section
        return redirect(url_for('home') + '#contact')

# This block allows you to run the app directly with 'python app.py'
