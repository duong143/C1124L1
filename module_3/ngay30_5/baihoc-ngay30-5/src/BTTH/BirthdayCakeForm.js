import { useState } from "react";

function BirthdayCakeForm() {
    const [formData, setFormData] = useState({
        customerName: "",
        address: "",
        phone: "",
        cakeType: "",
        note: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const validatePhone = (phone) => {
        const regex = /^\d+$/;
        return regex.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.customerName.trim()) {
            alert("❌ Vui lòng nhập tên khách hàng.");
            return;
        }

        if (!formData.address.trim()) {
            alert("❌ Vui lòng nhập địa chỉ.");
            return;
        }

        if (!formData.phone.trim()) {
            alert("❌ Vui lòng nhập số điện thoại.");
            return;
        }

        if (!validatePhone(formData.phone)) {
            alert("❌ Số điện thoại không hợp lệ (chỉ được chứa số).");
            return;
        }

        if (!formData.cakeType) {
            alert("❌ Vui lòng chọn loại bánh.");
            return;
        }

        console.log("🎂 Đơn đặt bánh sinh nhật:");
        console.log("Khách hàng:", formData.customerName);
        console.log("Địa chỉ:", formData.address);
        console.log("Số điện thoại:", formData.phone);
        console.log("Loại bánh:", formData.cakeType);
        console.log("Ghi chú:", formData.note);
    };

    return (
        <div>
            <h2>🎂 Đặt bánh sinh nhật</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Họ tên khách hàng:</label><br />
                    <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Địa chỉ:</label><br />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Số điện thoại:</label><br />
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Loại bánh:</label><br />
                    <select
                        name="cakeType"
                        value={formData.cakeType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">-- Chọn loại bánh --</option>
                        <option value="Socola">Socola</option>
                        <option value="Vanilla">Vanilla</option>
                        <option value="Trái cây">Trái cây</option>
                        <option value="Phô mai">Phô mai</option>
                    </select>
                </div>

                <br />

                <div>
                    <label>Ghi chú (tuỳ chọn):</label><br />
                    <textarea
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        rows="3"
                    />
                </div>

                <br />
                <button type="submit">Đặt bánh</button>
            </form>
        </div>
    );
}

export default BirthdayCakeForm;
