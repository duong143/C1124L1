import { useState } from "react";

function NewsletterForm() {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        frequency: "Hàng ngày",
        interests: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData(prev => ({
                ...prev,
                interests: checked
                    ? [...prev.interests, value]
                    : prev.interests.filter(item => item !== value)
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Thông tin đăng ký nhận tin:");
        console.log("Họ tên:", formData.name);
        console.log("Email:", formData.email);
        console.log("Tần suất:", formData.frequency);
        console.log("Chủ đề quan tâm:", formData.interests.join(", ") || "Không có");
    };

    return (
        <div>
            <h1>📧 Đăng ký nhận tin</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        name="email"
                        placeholder="Nhập email..."
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Họ tên:</label><br />
                    <input
                        type="text"
                        name="name"
                        placeholder="Nhập họ tên..."
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Tần suất nhận tin:</label><br />
                    <select
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleChange}
                    >
                        <option value="Hàng ngày">Hàng ngày</option>
                        <option value="Hàng tuần">Hàng tuần</option>
                        <option value="Hàng tháng">Hàng tháng</option>
                    </select>
                </div>

                <br />

                <div>
                    <label>Chủ đề quan tâm:</label><br />
                    <label>
                        <input
                            type="checkbox"
                            name="interests"
                            value="Tin công nghệ"
                            onChange={handleChange}
                        />
                        Tin công nghệ
                    </label><br />
                    <label>
                        <input
                            type="checkbox"
                            name="interests"
                            value="Ưu đãi"
                            onChange={handleChange}
                        />
                        Ưu đãi
                    </label><br />
                    <label>
                        <input
                            type="checkbox"
                            name="interests"
                            value="Tin tức"
                            onChange={handleChange}
                        />
                        Tin tức
                    </label>
                </div>

                <br />
                <button type="submit">Đăng ký</button>
            </form>
        </div>
    );
}

export default NewsletterForm;
