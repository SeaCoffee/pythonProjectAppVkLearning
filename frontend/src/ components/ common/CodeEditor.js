import React, { useRef, useEffect } from "react";
import ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/theme-monokai';
import '../../styles.css';

const CodeEditor = ({ theme, code, onChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = ace.edit(editorRef.current);
    editor.setTheme(theme === 'light' ? 'ace/theme/textmate' : 'ace/theme/monokai');
    editor.session.setMode("ace/mode/python");
    editor.setValue(code);
    editor.on("change", () => {
      onChange(editor.getValue());
    });

    return () => {
      editor.destroy();
    };
  }, []);

  useEffect(() => {
    const editor = ace.edit(editorRef.current);
    editor.setTheme(theme === 'light' ? 'ace/theme/textmate' : 'ace/theme/monokai');
  }, [theme]);

  return <div ref={editorRef} style={{ width: "100%", height: "100%" }} />;
};

export default CodeEditor;
