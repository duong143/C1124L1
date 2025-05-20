import React from 'react';

function LabeledButton({ label, onClick }) {
  const handleClick = () => {
    onClick(label);
  };

  return (
    <button onClick={handleClick} style={{ margin: '5px' }}>
      {label}
    </button>
  );
}

export default LabeledButton;
