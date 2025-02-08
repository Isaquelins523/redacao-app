import React from "react";
import Paragraph from "../paragraph/Paragraph.jsx";

const DraftPreview = ({ paragraphs }) => {
  return (
    <div>
      {paragraphs.map((paragraph) => (
        <Paragraph key={paragraphs.id} texto={paragraphs.texto} />
      ))}
    </div>
  );
};

export default DraftPreview;
