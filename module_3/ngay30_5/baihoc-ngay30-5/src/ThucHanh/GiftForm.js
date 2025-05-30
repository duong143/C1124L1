import { useState } from "react";

const GiftForm = () => {
    const [formData, setFormData] = useState({
        childName: '',
        age: '',
        parentName: '',
        address: '',
        giftType: ''
    });

    const [errors, setErrors] = useState({});

    const handleOnChangeData = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.childName.trim()) {
            newErrors.childName = "Vui lòng nhập tên của em bé!";
        }

        if (!formData.age || isNaN(formData.age) || Number(formData.age) < 1) {
            newErrors.age = "Tuổi không hợp lệ!";
        }

        if (!formData.parentName.trim()) {
            newErrors.parentName = "Vui lòng nhập tên phụ huynh!";
        }

        if (!formData.address.trim()) {
            newErrors.address = "Vui lòng nhập địa chỉ!";
        }

        if (!formData.giftType) {
            newErrors.giftType = "Vui lòng chọn loại quà!";
        }

        return newErrors;
    };

    const submitForm = (e) => {
        e.preventDefault();
        const newErrors = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            alert("Đăng ký thành công! Phần quà sẽ được gửi tới em bé!");
            console.log("Dữ liệu form:", formData);
        }
    };

    return (
        <div>
            <h1>🎁 Đăng ký nhận quà 🎁</h1>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor="childName">Tên của con</label>
                    <input
                        type="text"
                        name="childName"
                        id="childName"
                        placeholder="Nhập tên của em bé..."
                        value={formData.childName}
                        onChange={handleOnChangeData}
                    />
                    {errors.childName && <p style={{ color: "red" }}>{errors.childName}</p>}
                </div>

                <br />

                <div>
                    <label htmlFor="age">Tuổi</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        placeholder="Nhập tuổi của em bé..."
                        value={formData.age}
                        onChange={handleOnChangeData}
                    />
                    {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
                </div>

                <br />

                <div>
                    <label htmlFor="parentName">Tên phụ huynh</label>
                    <input
                        type="text"
                        name="parentName"
                        id="parentName"
                        placeholder="Nhập tên phụ huynh..."
                        value={formData.parentName}
                        onChange={handleOnChangeData}
                    />
                    {errors.parentName && <p style={{ color: "red" }}>{errors.parentName}</p>}
                </div>

                <br />

                <div>
                    <label htmlFor="address">Địa chỉ nhà</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Nhập địa chỉ nhà..."
                        value={formData.address}
                        onChange={handleOnChangeData}
                    />
                    {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
                </div>

                <br />

                <div>
                    <label htmlFor="giftType">Chọn loại quà</label>
                    <select
                        name="giftType"
                        id="giftType"
                        value={formData.giftType}
                        onChange={handleOnChangeData}
                    >
                        <option value="">-- Chọn quà --</option>
                        <option value="sách tô màu">Sách tô màu</option>
                        <option value="gấu bông">Gấu bông</option>
                        <option value="lego">Lego</option>
                        <option value="đồ chơi">Đồ chơi</option>
                    </select>
                    {errors.giftType && <p style={{ color: "red" }}>{errors.giftType}</p>}
                </div>

                <br />
                <button type="submit">Đăng ký nhận quà</button>
            </form>
        </div>
    );
};

export default GiftForm;
