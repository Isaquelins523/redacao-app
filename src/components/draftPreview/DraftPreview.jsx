import React from "react";
import Paragraph from "../paragraph/Paragraph.jsx";

export const DraftPreview = ({ paragraphs }) => {
  return (
    <div>
      {paragraphs.map((paragraph) => (
        <Paragraph key={paragraph.id} texto={paragraph.text} />
      ))}
    </div>
  );
};
