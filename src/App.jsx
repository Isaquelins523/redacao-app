// src/App.jsx
import React from "react";
import DraftEditor from "./components/draftEditor/DraftEditor.jsx";
import GlobalStyle from "./styles/GlobalStyles.js";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
        <h1>Editor de Redação</h1>
        <DraftEditor />
      </div>
    </>
  );
};

export default App;
