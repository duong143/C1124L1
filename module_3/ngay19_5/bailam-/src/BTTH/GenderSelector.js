import React from 'react';

function GenderSelector({ onSelectGender }) {
  return (
    <div>
      <button onClick={() => onSelectGender('Nam')}>Nam</button>
      <button onClick={() => onSelectGender('Nữ')}>Nữ</button>
      <button onClick={() => onSelectGender('Khác')}>Khác</button>
    </div>
  );
}

export default GenderSelector;
