// pages/index.js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (localStorage.getItem('username')) {
      router.push('/products');
    }
  }, []);

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('username', username);
      router.push('/products');
    } else {
      alert('Vui lòng nhập tên đăng nhập');
    }
  };

  return (
    <div className="container">
      <h2>Đăng nhập</h2>
      <label>Tên đăng nhập:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nhập username"
      />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}
