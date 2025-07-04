import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username.trim() !== '') {
      localStorage.setItem('username', username);
      router.push('/tasks');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Task Manager Login</h2>
      <div className="card p-4 mx-auto" style={{ maxWidth: '400px' }}>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
