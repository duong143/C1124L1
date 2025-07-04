// pages/products/index.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ProductList() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (!user) {
      router.push('/login');
    } else {
      setUsername(user);
      const data = JSON.parse(localStorage.getItem('products') || '[]');
      setProducts(data);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    router.push('/login');
  };

  return (
    <div>
      <div className="navbar">
        <div>Chào, {username}</div>
        <div>
          <Link href="/products/add">Thêm sản phẩm</Link>
          <a style={{ marginLeft: 20, cursor: 'pointer' }} onClick={handleLogout}>
            Đăng xuất
          </a>
        </div>
      </div>

      <div className="container">
        <h2>Danh sách sản phẩm</h2>
        {products.length === 0 ? (
          <p>Chưa có sản phẩm nào.</p>
        ) : (
          <ul>
            {products.map((p, index) => (
              <li key={index}>
                <Link href={`/products/${index}`}>{p.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
