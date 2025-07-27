from flask import Flask, render_template, request, redirect, url_for, flash, session
from werkzeug.security import check_password_hash
import sqlite3

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'

# Database connection helper
def get_db_connection():
    conn = sqlite3.connect('db.sqlite3')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/login', methods=['POST'])
def login():
    student_name = request.form['student_name']
    student_id = request.form['student_id']
    conn = get_db_connection()
    user = conn.execute('SELECT * FROM users WHERE student_name = ? AND student_id = ?', (student_name, student_id)).fetchone()
    conn.close()
    if user:
        session['user_id'] = user['id']
        flash('Sign in successful!', 'success')
        return redirect(url_for('index'))
    else:
        flash('Invalid credentials. Please try again.', 'danger')
        return redirect(url_for('signin'))

@app.route('/')
def index():
    return 'Welcome to the CJ LRC Voting Portal!'

@app.route('/signin')
def signin():
    return render_template('signIn-page.html')

if __name__ == '__main__':
    app.run(debug=True)
