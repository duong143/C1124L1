import React from 'react';

function Button() {
  const handleClick = () => {
    console.log('Hello, React!');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Nhấn tôi
    </button>
  );
}

export default Button;