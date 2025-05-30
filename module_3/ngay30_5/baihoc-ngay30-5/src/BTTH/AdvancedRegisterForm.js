import { useState } from "react";

function AdvancedRegisterForm() {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        newPassword: "",
        confirmPassword: "",
        agreeToTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.agreeToTerms) {
            alert("❌ Bạn phải đồng ý với điều khoản trước khi tiếp tục.");
            return;
        }

        if (formData.newPassword !== formData.confirmPassword) {
            alert("❌ Mật khẩu xác nhận không khớp.");
            return;
        }

        // In ra thông tin không bao gồm mật khẩu
        console.log("✅ Thông tin đăng ký:");
        console.log("Email:", formData.email);
        console.log("Username:", formData.username);
    };

    return (
        <div>
            <h2>🔐 Tạo tài khoản nâng cao</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Tên đăng nhập:</label><br />
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Mật khẩu mới:</label><br />
                    <input
                        type="password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Xác nhận mật khẩu:</label><br />
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                        />
                        Tôi đồng ý với các điều khoản
                    </label>
                </div>

                <br />
                <button type="submit">Đăng ký</button>
            </form>
        </div>
    );
}

export default AdvancedRegisterForm;

