from flask import request, jsonify, redirect, url_for
from . import main
from .adaptive_learning import adaptive_learning_instance
from .models import UserProgress, User, Lesson
from .database import db_session
from vk_api import VkApi
from .. import app

def init_vk():
    vk_session = VkApi(token=app.config["VK_SERVICE_TOKEN"])
    vk = vk_session.get_api()
    return vk

app_instance = app
vk_instance = init_vk()

@main.route("/generate_text", methods=["POST"])
def generate_text():
    input_text = request.form.get("input_text", "")
    generated_text = adaptive_learning_instance.generate_text(input_text)
    return jsonify({"generated_text": generated_text})

@main.route("/classify_text", methods=["POST"])
def classify_text():
    input_text = request.form.get("input_text", "")
    classification = adaptive_learning_instance.classify_text(input_text)
    return jsonify({"classification": classification})

@main.route("/get_user_progress", methods=["GET"])
def get_user_progress():
    user_id = request.args.get("user_id")
    user_progress = UserProgress.query.filter_by(user_id=user_id).all()
    user_progress_data = [
        {
            "lesson_id": progress.lesson_id,
            "progress": progress.progress,
            "lesson_title": progress.lesson.title,
        }
        for progress in user_progress
    ]
    return jsonify({"user_progress": user_progress_data})

@main.route("/update_user_progress", methods=["POST"])
def update_user_progress():
    user_id = request.form.get("user_id")
    lesson_id = request.form.get("lesson_id")
    progress = request.form.get("progress")

    user_progress = UserProgress.query.filter_by(user_id=user_id, lesson_id=lesson_id).first()

    if not user_progress:
        user_progress = UserProgress(user_id=user_id, lesson_id=lesson_id, progress=progress)
        db_session.add(user_progress)
    else:
        user_progress.progress = progress

    db_session.commit()
    return jsonify({"success": True})

@main.route("/login/vk")
def login_vk():
    vk_auth_url = f"https://oauth.vk.com/authorize?client_id={app_instance.config['VK_APP_ID']}&display=page&redirect_uri={url_for('authorize_vk', _external=True)}&scope=friends,photos&response_type=code&v=5.131"
    return redirect(vk_auth_url)

@main.route("/authorize/vk")
def authorize_vk():
    code = request.args.get("code")
    if code:
        pass
    else:
        pass