import React, { useState } from 'react';
import LoginForm from './LoginForm';

function Login() {
    const [message, setMessage] = useState('');

    const handleLogin = ({ email, password }) => {
        if (email === 'admin@gmail.com' && password === '123456') {
            setMessage(' Đăng nhập thành công!');
        } else {
            setMessage(' Sai email hoặc mật khẩu.');
        }
    };

    return (
        <div>
            <h2>Đăng nhập</h2>
            <LoginForm onSubmitLogin={handleLogin} />
            {message && <p>{message}</p>}
        </div>
    );
}

export default Login;
