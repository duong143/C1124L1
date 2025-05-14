import React from 'react';
import './App.css';

function App() {
  // ----------- BÀI 2 -----------
  // Dùng React.createElement để tạo các element
  const title = React.createElement('h1', null, 'Chào mừng đến với React!');
  const paragraph = React.createElement('p', null, 'Đây là bài tập đầu tiên của chúng ta.');
  const link = React.createElement('a', { href: 'https://www.google.com' }, 'Đi đến Google');


  // ----------- BÀI 3 -----------
  // Mảng các loại trái cây
  const fruits = ["Apple", "Banana", "Orange", "Apricot", "Black rowan", "Cranberry"];

  // Dùng map để tạo các thẻ <li>
  const fruitItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

  return (
    // <div>
    //   {/* Bài 2 */}
    //   {title}
    //   {paragraph}
    //   {link}
    //
    //   <hr />
    //
    //   {/* Bài 3 */}
    //   <h1>List of fruits</h1>
    //   <ul>
    //     {fruitItems}
    //   </ul>
    // </div>

  );
}

export default App;
