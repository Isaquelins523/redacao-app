import React, { useState } from "react";
import { Button, TextArea, Container } from "./styles.js";
import ParagraphList from "../draftPreview/DraftPreview.jsx";

const DraftEditor = () => {
  const [paragrafos, setParagrafos] = useState([]);
  const [texto, setTexto] = useState("");

  const handleAdicionarParagrafo = () => {
    if (texto.trim()) {
      const novoParagrafo = {
        id: Date.now(),
        texto,
      };
      setParagrafos((prev) => [...prev, novoParagrafo]);
      setTexto("");
    }
  };

  const handleSalvarRascunho = () => {
    alert("Rascunho salvo com sucesso!");
  };

  return (
    <Container>
      <TextArea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite seu parágrafo aqui..."
        rows="5"
      />
      <Button onClick={handleAdicionarParagrafo}>Adicionar Parágrafo</Button>
      <Button onClick={handleSalvarRascunho}>Salvar Rascunho</Button>

      <ParagraphList paragrafos={paragrafos} />
    </Container>
  );
};

export default DraftEditor;
