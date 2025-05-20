import React from 'react';

function PersonalForm({ onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <form>
      <div>
        <label>Tên: </label>
        <input
          type="text"
          name="name"
          placeholder="Nhập tên"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Tuổi: </label>
        <input
          type="number"
          name="age"
          placeholder="Nhập tuổi"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Nhập email"
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default PersonalForm;
