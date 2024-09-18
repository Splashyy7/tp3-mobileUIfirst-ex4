import React from 'react';

const TextoEstilizado = () => {
  const estiloParagrafo = {
    backgroundColor: '#f0f0f0',
    color: '#333',
    padding: '10px',
    fontFamily: 'Arial, sans-serif',
    borderRadius: '5px',
    textAlign: 'center'
  };

  return (
    <p style={estiloParagrafo}>
      Estilo inline
    </p>
  );
};

export default TextoEstilizado;
