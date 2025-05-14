import React from 'react';

function Bai5(){
    const names = ['Alice', 'Bob', 'Charlie'];
    return(
        <div>
      <p>Bài 5:</p>
      <ul>
        {names.map((name, index) => <li key={index}>{name}</li>)}
      </ul>
    </div>
    );
}
export default Bai5;