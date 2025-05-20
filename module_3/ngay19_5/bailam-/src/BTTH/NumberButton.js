import React from 'react';

function NumberButton({ number, onClick }) {
  const handleClick = () => {
    onClick(number);
  };

  return (
    <button onClick={handleClick} style={{ margin: '5px' }}>
      Nút {number}
    </button>
  );
}

export default NumberButton;
