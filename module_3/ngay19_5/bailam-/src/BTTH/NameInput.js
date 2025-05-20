import React from 'react';

function NameInput({ onNameChange }) {
  const handleChange = (e) => {
    onNameChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Nhập tên..."
      onChange={handleChange}
    />
  );
}

export default NameInput;
