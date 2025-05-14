// bTap.js
import React from 'react';

// Bài 1 - 20: Mỗi bài là một hàm hoặc biến JSX
export const Bai1 = <h1>Bài 1: Chào mừng đến với React!</h1>;

export const Bai2 = (() => {
  const user = { name: "Nguyễn Văn A" };
  return <h2>Bài 2: Xin chào, {user.name}!</h2>;
})();

export function Bai3() {
  return (
    <div>
      <p>Bài 3: Đây là một đoạn văn nằm trong thẻ div.</p>
    </div>
  );
}

export const Bai4 = <p>Bài 4: Kết quả là: {2 + 2}</p>;

export const Bai5 = (() => {
  const names = ['Alice', 'Bob', 'Charlie'];
  return (
    <div>
      <p>Bài 5:</p>
      <ul>
        {names.map((name, index) => <li key={index}>{name}</li>)}
      </ul>
    </div>
  );
})();

export const Bai6 = (
  <div>
    <p>Bài 6:</p>
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
      Tìm kiếm trên Google
    </a>
  </div>
);

export const Bai7 = (
  <div>
    <p>Bài 7:</p>
    <img src="https://via.placeholder.com/150" alt="Ảnh ví dụ" />
  </div>
);

export const Bai8 = (
  <div>
    <p>Bài 8:</p>
    <span>Đoạn 1 </span>
    <span>Đoạn 2</span>
  </div>
);

export function Bai9() {
  return (
    <div>
      <p>Bài 9:</p>
      <h2>Tiêu đề 1</h2>
      <h2>Tiêu đề 2</h2>
    </div>
  );
}

export const Bai10 = (
  <h1 style={{ color: 'blue', backgroundColor: 'lightblue' }}>
    Bài 10: Tiêu đề có style
  </h1>
);

export const Bai11 = <button>Bài 11: Nhấn vào đây</button>;

export const Bai12 = (() => {
  const product = { name: 'iPhone', price: '25.000.000 VNĐ' };
  return (
    <div>
      <p>Bài 12:</p>
      <h3>{product.name}</h3>
      <p>Giá: {product.price}</p>
    </div>
  );
})();

function createImage(url, altText) {
  return <img src={url} alt={altText} />;
}
export const Bai13 = (
  <div>
    <p>Bài 13:</p>
    {createImage("https://via.placeholder.com/100", "Ảnh React")}
  </div>
);

export const Bai14 = <p>Bài 14: 5 lớn hơn 3: {5 > 3 ? "Đúng" : "Sai"}</p>;

export const Bai15 = (() => {
  const items = [
    { id: 1, title: "Tiêu đề 1" },
    { id: 2, title: "Tiêu đề 2" },
    { id: 3, title: "Tiêu đề 3" },
  ];
  return (
    <div>
      <p>Bài 15:</p>
      <ul>
        {items.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  );
})();

export const Bai16 = (
  <div>
    <p>Bài 16:</p>
    <input type="text" />
    <button>Gửi</button>
  </div>
);

export const Bai17 = (
  <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
    Bài 17: Quan trọng!
  </span>
);

function renderNumber(num) {
   <p>Số là: {num}</p>;
}
export const Bai18 = (
  <div>
    <p>Bài 18:</p>
    {renderNumber(5)}
    {renderNumber(20)}
  </div>
);

export const Bai19 = (
  <div>
    <p>Bài 19:</p>
    <table border="1">
      <tbody>
        <tr>
          <td>Cột 1</td>
          <td>Cột 2</td>
          <td>Cột 3</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export const Bai20 = (
  <div>
    <p>Bài 20:</p>
    <label htmlFor="nameInput">Tên:</label>
    <input type="text" id="nameInput" />
  </div>
);
export default bTap;