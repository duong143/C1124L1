import React from 'react';

function CountrySelector({ onSelectCountry }) {
  return (
    <select onChange={e => onSelectCountry(e.target.value)}>
      <option value="">-- Chọn quốc gia --</option>
      <option value="VN">Việt Nam</option>
      <option value="US">Mỹ</option>
      <option value="JP">Nhật Bản</option>
      <option value="FR">Pháp</option>
    </select>
  );
}

export default CountrySelector;
