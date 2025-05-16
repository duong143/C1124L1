import React from 'react';

function LoginStatus(props) {
    return (
        <p>
            {props.isLoggedIn ? "Đã đăng nhập" : "Chưa đăng nhập"}
        </p>
    );
}

export default LoginStatus;
