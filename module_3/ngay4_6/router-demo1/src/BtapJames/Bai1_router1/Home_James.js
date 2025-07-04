
import React from 'react';
import { useLocation } from 'react-router-dom';

function Home_James() {
  const location = useLocation();
  const email = location.state?.email;

  return (
    <div style={{ padding: 20 }}>
      <h2>Chào mừng bạn!</h2>
      {email ? (
        <p>Thông tin tài khoản: <strong>{email}</strong></p>
      ) : (
        <p>Không có thông tin tài khoản. Vui lòng đăng nhập lại.</p>
      )}
    </div>
  );
}

export default Home_James;
