from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey

# key names will use to store some things in the session;
# put here as constants so we're guaranteed to be consistent in
# our spelling of these
RESPONSES_KEY = "responses"

app = Flask(__name__)
app.config['SECRET_KEY'] = "never-tell!"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)


@app.route("/")
def show_survey_start():
    """Select a survey."""

    return render_template("survey.html", survey=survey)


@app.route("/begin", methods=["POST"])
def start_survey():
    """Clear the session of responses."""

    session[RESPONSES_KEY] = []

    return redirect("/questions/0")


@app.route("/answer", methods=["POST"])
def handle_question():
    """Save response and redirect to next question."""

    # get the response choice
    choice = request.form['answer']

    # add this response to the session
    responses = session[RESPONSES_KEY]
    responses.append(choice)
    session[RESPONSES_KEY] = responses

    if (len(responses) == len(survey.questions)):
        # They've answered all the questions! Thank them.
        return redirect("/thanks")

    else:
        return redirect(f"/questions/{len(responses)}")


@app.route("/questions/<int:qid>")
def show_question(question_id):
    """Display current question."""
    responses = session.get(RESPONSES_KEY)

    if (responses is None):
        # trying to access question page too soon
        return redirect("/")

    if (len(responses) == len(survey.questions)):
        # They've answered all the questions! Thank them.
        return redirect("/thanks")

    if (len(responses) != question_id):
        # Trying to access questions out of order.
        flash(f"Invalid question id: {question_id}.")
        return redirect(f"/questions/{len(responses)}")

    question = survey.questions[question_id]
    return render_template(
        "question.html", question_num=question_id, question=question)


@app.route("/thanks")
def complete():
    """Survey complete. Show completion page."""

    return render_template("thanks.html")
