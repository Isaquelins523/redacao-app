import React from "react";
import Paragraph from "../paragraph/Paragraph.jsx";

const DraftPreview = ({ paragrafos }) => {
  return (
    <div>
      {paragrafos.map((paragrafo) => (
        <Paragraph key={paragrafo.id} texto={paragrafo.texto} />
      ))}
    </div>
  );
};

export default DraftPreview;
