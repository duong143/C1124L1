import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";
import {FaEye, FaEyeSlash} from "react-icons/fa";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.get("http://localhost:5000/users");
            const user = res.data.find(
                (u) => u.email === email && u.password === password
            );

            if (user) {
                alert("Đăng nhập thành công!");
                navigate("/home");
            } else {
                alert("Sai email hoặc mật khẩu!");
            }
        } catch (err) {
            console.error("Lỗi khi đăng nhập:", err);
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h2>Đăng nhập</h2>

                <div className="input-field">
                    <input
                        type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Nhập tài khoản</label>
                </div>

                <div className="input-field password-field">
                    <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>Nhập mật khẩu</label>
                    <span
                        className="eye-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash/> : <FaEye/>}
                    </span>
                </div>

                <div className="forget">
                    <label htmlFor="remember">
                        <input type="checkbox" id="remember"/>
                        <p>Nhớ mật khẩu</p>
                    </label>
                    <a href="#">Quên mật khẩu</a>
                </div>

                <button type="submit">Đăng nhập</button>

                <div className="register">
                    <p>
                        Bạn chưa có tài khoản ?<a href="#">Đăng ký</a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
