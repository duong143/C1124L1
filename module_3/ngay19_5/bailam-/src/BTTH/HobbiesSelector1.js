import React, { useState } from 'react';

function HobbiesSelector({ options, onChange }) {
  const [selected, setSelected] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    let updated;

    if (checked) {
      updated = [...selected, value];
    } else {
      updated = selected.filter(item => item !== value);
    }

    setSelected(updated);
    onChange(updated); // gửi về cha
  };

  return (
    <div>
      {options.map((hobby, index) => (
        <label key={index} style={{ display: 'block' }}>
          <input
            type="checkbox"
            value={hobby}
            checked={selected.includes(hobby)}
            onChange={handleChange}
          />
          {hobby}
        </label>
      ))}
    </div>
  );
}

export default HobbiesSelector;
