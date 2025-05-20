import React from 'react';

function SearchInput({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Tìm sản phẩm..."
      onChange={handleChange}
    />
  );
}

export default SearchInput;
