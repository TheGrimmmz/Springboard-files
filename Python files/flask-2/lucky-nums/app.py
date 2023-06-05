from flask import Flask, render_template, jsonify, request

app = Flask(__name__)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route('/api/get-lucky-num', methods=["POST"])
def get_lucky_num():
    """get lucky number"""

    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    year = data.get('year')
    color = data.get('color')

    return {
        'name': name,
        'email': email,
        'year': year,
        'color': color
    }
