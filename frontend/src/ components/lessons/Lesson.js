import React, { useState } from "react";
import axios from "axios";

const Lesson = () => {
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [classification, setClassification] = useState(null);

  const handleGenerateText = async () => {
    const response = await axios.post("/generate_text", { input_text: inputText });
    setGeneratedText(response.data.generated_text);
  };

  const handleClassifyText = async () => {
    const response = await axios.post("/classify_text", { input_text: inputText });
    setClassification(response.data.classification);
  };

  return (
    <div>
      <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={handleGenerateText}>Generate Text</button>
      <button onClick={handleClassifyText}>Classify Text</button>
      <p>Generated Text: {generatedText}</p>
      <p>Classification: {classification}</p>
    </div>
  );
};

export default Lesson;