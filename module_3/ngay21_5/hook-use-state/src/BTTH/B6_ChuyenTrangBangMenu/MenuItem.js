import React from 'react';

function MenuItem({ label, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 12px',
        backgroundColor: isSelected ? '#4caf50' : '#e0e0e0',
        color: isSelected ? 'white' : 'black',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
}

export default MenuItem;
