import React from 'react';

function Bai15(){
     const items = [
    { id: 1, title: "Tiêu đề 1" },
    { id: 2, title: "Tiêu đề 2" },
    { id: 3, title: "Tiêu đề 3" },
  ];
    return(
    <div>
      <p>Bài 15:</p>
      <ul>
        {items.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
    );
}
export default Bai15;