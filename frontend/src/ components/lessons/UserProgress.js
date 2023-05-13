import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProgress = ({ userId }) => {
  const [userProgress, setUserProgress] = useState([]);

  useEffect(() => {
    const fetchUserProgress = async () => {
      const response = await axios.get("/get_user_progress", { params: { user_id: userId } });
      setUserProgress(response.data.user_progress);
    };

    fetchUserProgress();
  }, [userId]);

  return (
    <div>
      <h2>Прогресс пользователя</h2>
      <table>
        <thead>
          <tr>
            <th>Название урока</th>
            <th>Прогресс</th>
          </tr>
        </thead>
        <tbody>
          {userProgress.map((progress) => (
            <tr key={progress.lesson_id}>
              <td>{progress.lesson_title}</td>
              <td>{progress.progress}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserProgress;