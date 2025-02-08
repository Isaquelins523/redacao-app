import React, { useState } from "react";
import { Button, TextArea, Container } from "./styles.js";
import { DraftPreview } from "../draftPreview/DraftPreview.jsx";

const DraftEditor = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [text, setText] = useState("");

  const handleAddParagraph = () => {
    if (text.trim()) {
      const newParagraph = {
        id: Date.now(),
        text,
      };
      setParagraphs((prev) => [...prev, newParagraph]);
      setText("");
    }
  };

  const handleSavDraft = () => {
    alert("Rascunho salvo com sucesso!");
  };

  return (
    <Container>
      <TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite seu parágrafo aqui..."
        rows="5"
      />
      <Button onClick={handleAddParagraph}>Adicionar Parágrafo</Button>
      <Button onClick={handleSavDraft}>Salvar Rascunho</Button>

      <DraftPreview paragraphs={paragraphs} />
    </Container>
  );
};

export default DraftEditor;
