import { useState } from "react";

function RequestConsultForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const validatePhone = (phone) => {
        const regex = /^\d{10}$/;
        return regex.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            alert("❌ Vui lòng nhập tên.");
            return;
        }

        if (!formData.email.trim()) {
            alert("❌ Vui lòng nhập email.");
            return;
        }

        if (!validatePhone(formData.phone)) {
            alert("❌ Số điện thoại phải gồm đúng 10 chữ số.");
            return;
        }

        if (formData.message.trim().length < 10) {
            alert("❌ Lời nhắn phải có ít nhất 10 ký tự.");
            return;
        }

        console.log("📞 Yêu cầu tư vấn:");
        console.log("Họ tên:", formData.name);
        console.log("Email:", formData.email);
        console.log("SĐT:", formData.phone);
        console.log("Lời nhắn:", formData.message);
    };

    return (
        <div>
            <h2>📩 Yêu cầu tư vấn</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Họ tên:</label><br />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

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
                    <label>Số điện thoại:</label><br />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Lời nhắn:</label><br />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                    />
                </div>

                <br />
                <button type="submit">Gửi yêu cầu</button>
            </form>
        </div>
    );
}

export default RequestConsultForm;
