import React from 'react';

function ChildButton(props) {
  const handleClick = () => {
    props.onNotify("Clicked!");
  };

  return (
    <button onClick={handleClick}>
      Bấm tôi
    </button>
  );
}

export default ChildButton;
