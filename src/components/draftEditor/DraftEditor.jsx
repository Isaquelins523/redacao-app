// src/components/DraftEditor/DraftEditor.jsx
import React, { useState } from "react";
import * as S from "./styles";
import Paragraph from "../paragraph/Paragraph.jsx";

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
    <S.Container>
      <S.Textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite seu parágrafo aqui..."
        rows="5"
      />
      <S.Button onClick={handleAdicionarParagrafo}>
        Adicionar Parágrafo
      </S.Button>
      <S.Button onClick={handleSalvarRascunho}>Salvar Rascunho</S.Button>

      <div>
        {paragrafos.map((paragrafo) => (
          <Paragraph key={paragrafo.id} texto={paragrafo.texto} />
        ))}
      </div>
    </S.Container>
  );
};

export default DraftEditor;
