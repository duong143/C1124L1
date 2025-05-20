import React, { useState } from 'react';

function HobbiesCheckbox({ options, onChange }) {
  const [selected, setSelected] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let newSelected;
    if (checked) {
      newSelected = [...selected, value];
    } else {
      newSelected = selected.filter(item => item !== value);
    }
    setSelected(newSelected);
    onChange(newSelected);
  };

  return (
    <div>
      {options.map((option, idx) => (
        <label key={idx} style={{ display: 'block', margin: '5px 0' }}>
          <input
            type="checkbox"
            value={option}
            onChange={handleCheckboxChange}
            checked={selected.includes(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default HobbiesCheckbox;
