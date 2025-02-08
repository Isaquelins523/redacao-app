// src/components/ParagraphList/ParagraphList.jsx
import React from "react";
import Paragraph from "../paragraph/Paragraph.jsx"; // Importe o componente Paragraph

const ParagraphList = ({ paragrafos }) => {
  return (
    <div>
      {paragrafos.map((paragrafo) => (
        <Paragraph key={paragrafo.id} texto={paragrafo.texto} />
      ))}
    </div>
  );
};

export default ParagraphList;
