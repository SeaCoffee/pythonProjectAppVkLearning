import os

class Config(object):
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL") or "sqlite:///app.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    VK_APP_ID = os.environ.get("VK_APP_ID")
    VK_APP_SECRET = os.environ.get("VK_APP_SECRET")
    VK_SERVICE_TOKEN = os.environ.get("VK_SERVICE_TOKEN")

