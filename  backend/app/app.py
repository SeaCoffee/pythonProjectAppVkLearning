from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config
from .database import db_session
import vk_api
from vk_api import VkApi
from vk_api.utils import get_random_id


db = SQLAlchemy()
migrate = Migrate()

__all__ = ['create_app']

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)

    with app.app_context():
        from .main import main as main_blueprint

        app.register_blueprint(main_blueprint)

    @app.teardown_appcontext
    def shutdown_session(exception=None):
        db_session.remove()

    vk_session = vk_api.VkApi(token="YOUR_ACCESS_TOKEN")
    vk = vk_session.get_api()

    vk_session = VkApi(token=app.config["VK_SERVICE_TOKEN"])
    vk = vk_session.get_api()


    return app




