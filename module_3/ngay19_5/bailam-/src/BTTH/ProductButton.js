import React from 'react';

function ProductButton({ name, onSelect }) {
  const handleClick = () => {
    onSelect(name);
  };

  return (
    <button onClick={handleClick} style={{ margin: '5px' }}>
      {name}
    </button>
  );
}

export default ProductButton;
