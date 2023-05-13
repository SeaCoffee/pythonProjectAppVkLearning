import React, { useState, useEffect } from "react";
import CodeEditor from "./ components/ common/CodeEditor";
import ThemeSwitcher from "./ components/ common/ThemeSwitcher";
import axios from "axios";
import "./styles.css";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [code, setCode] = useState("");
  const [userId, setUserId] = useState("1");
  const [lessonId, setLessonId] = useState("1");

  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  const handleCodeSubmit = async (code) => {
    try {
      const response = await axios.post("http://localhost:5000/update_user_progress", {
        user_id: userId,
        lesson_id: lessonId,
        progress: 10,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Ошибка при отправке кода:", error);
    }
  };

  return (
    <div>
      <ThemeSwitcher currentTheme={theme} onSwitch={setTheme} />
      <div className="editor-container">
        <CodeEditor theme={theme} code={code} onChange={setCode} />
      </div>
      <button onClick={() => handleCodeSubmit(code)}>Submit Code</button>
    </div>
  );
};

export default App;