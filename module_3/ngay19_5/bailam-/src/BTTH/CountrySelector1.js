import React from 'react';

function CountrySelector({ onSelect }) {
  const handleChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="">-- Chọn quốc gia --</option>
      <option value="VN">Việt Nam</option>
      <option value="US">Hoa Kỳ</option>
      <option value="JP">Nhật Bản</option>
      <option value="KR">Hàn Quốc</option>
    </select>
  );
}

export default CountrySelector;
