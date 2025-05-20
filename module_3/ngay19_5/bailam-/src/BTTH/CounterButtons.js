import React, { useState } from 'react';

function CounterButtons() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prev => {
      const newCount = prev + 1;
      console.log('Giá trị hiện tại:', newCount);
      return newCount;
    });
  };

  const decrease = () => {
    setCount(prev => {
      const newCount = prev - 1;
      console.log('Giá trị hiện tại:', newCount);
      return newCount;
    });
  };

  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default CounterButtons;
