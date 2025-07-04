import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (user) router.push('/books');
  }, []);

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('username', username);
      router.push('/books');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Đăng nhập</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Nhập tên người dùng"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleLogin}>
        Đăng nhập
      </button>
    </div>
  );
}
