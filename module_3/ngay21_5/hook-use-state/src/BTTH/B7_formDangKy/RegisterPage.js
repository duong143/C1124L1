import React, { useState } from 'react';
import RegisterForm from './RegisterForm';

function RegisterPage() {
  const [users, setUsers] = useState([]);

  const handleRegister = (user) => {
    if (user.name.trim() !== '' && user.email.trim() !== '') {
      setUsers([...users, user]);
    }
  };

  return (
    <div>
      <h2>Đăng ký người dùng</h2>
      <RegisterForm onRegister={handleRegister} />
      <h3>Danh sách người đã đăng ký:</h3>
      <ul>
        {users.map((u, index) => (
          <li key={index}>{u.name} ({u.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default RegisterPage;
