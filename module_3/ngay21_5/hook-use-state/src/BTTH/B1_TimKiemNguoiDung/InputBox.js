import React from 'react';

function InputBox({ onInputChange }) {
    const handleChange = (e) => {
        onInputChange(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm..."
            onChange={handleChange}
        />
    );
}

export default InputBox;
