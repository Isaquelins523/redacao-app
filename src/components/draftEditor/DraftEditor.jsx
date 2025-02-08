import { useState } from "react";
import Paragraph from "../paragraph/Paragraph.jsx";
import * as S from "./styles";

function DraftEditor() {
  const [paragraphs, setParagraphs] = useState([]);
  const [input, setInput] = useState("");

  const addParagraph = () => {
    if (input.trim() === "") return;
    setParagraphs([...paragraphs, { id: Date.now(), text: input }]);
    setInput("");
  };

  return (
    <S.Container>
      <S.Title>Editor de Redação</S.Title>
      <S.TextArea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite um parágrafo..."
      />
      <S.Button onClick={addParagraph}>Adicionar Parágrafo</S.Button>

      <S.TextContainer>
        <S.SubTitle>Texto Completo:</S.SubTitle>
        {paragraphs.map((p) => (
          <Paragraph key={p.id} text={p.text} />
        ))}
      </S.TextContainer>
    </S.Container>
  );
}

export default DraftEditor;
