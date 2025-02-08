import React from "react";
import * as S from "./styles"; // Importando os estilos do componente

const SaveDraft = ({ onSave }) => {
  return <S.Button onClick={onSave}>Salvar Rascunho</S.Button>;
};

export default SaveDraft;
