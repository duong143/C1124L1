// pages/products/add.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddProduct() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (!name || !desc || !price) return alert('Nhập đầy đủ thông tin');

    const products = JSON.parse(localStorage.getItem('products') || '[]');
    products.push({ name, desc, price: parseFloat(price) });
    localStorage.setItem('products', JSON.stringify(products));
    router.push('/products');
  };

  return (
    <div className="container">
      <h2>Thêm sản phẩm mới</h2>
      <label>Tên sản phẩm:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>Mô tả:</label>
      <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
      <label>Giá:</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAdd}>Lưu</button>
    </div>
  );
}
