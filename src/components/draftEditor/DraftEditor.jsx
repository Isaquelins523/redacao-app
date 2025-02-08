import React, { useState } from "react";
import { Button, TextArea, Container } from "./styles.js";
import ParagraphList from "../draftPreview/DraftPreview.jsx";

const DraftEditor = () => {
  const [paragraph, setParagraphs] = useState([]);
  const [text, setText] = useState("");

  const handleAdicionarParagrafo = () => {
    if (text.trim()) {
      const newParagraph = {
        id: Date.now(),
        text,
      };
      setParagraphs((prev) => [...prev, newParagraph]);
      setText("");
    }
  };

  const handleSalvarRascunho = () => {
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
      <Button onClick={handleAdicionarParagrafo}>Adicionar Parágrafo</Button>
      <Button onClick={handleSalvarRascunho}>Salvar Rascunho</Button>

      <ParagraphList paragrafos={paragraph} />
    </Container>
  );
};

export default DraftEditor;
