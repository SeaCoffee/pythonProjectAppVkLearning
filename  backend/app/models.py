from sqlalchemy import Column, Integer, String, ForeignKey, Float
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    vk_id = Column(String, nullable=False, unique=True)
    name = Column(String, nullable=False)

    progress = relationship("UserProgress", back_populates="user")

class Lesson(Base):
    __tablename__ = "lessons"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    content = Column(String, nullable=False)

    progress = relationship("UserProgress", back_populates="lesson")

class UserProgress(Base):
    __tablename__ = "user_progress"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    lesson_id = Column(Integer, ForeignKey("lessons.id"))
    progress = Column(Integer, nullable=False)

    user = relationship("User", back_populates="progress")
    lesson = relationship("Lesson", back_populates="progress")
    score = Column(Float, nullable=True)