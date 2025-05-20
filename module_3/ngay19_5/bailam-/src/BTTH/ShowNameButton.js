import React from 'react';

function ShowNameButton(props) {
  const handleClick = () => {
    alert(`Tên là: ${props.name}`);
  };

  return (
    <button onClick={handleClick}>
      Hiển thị tên
    </button>
  );
}

export default ShowNameButton;
