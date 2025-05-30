import { useState } from "react";

function PersonalInfoForm() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        hobby: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                hobby: checked
                    ? [...prev.hobby, value]
                    : prev.hobby.filter((h) => h !== value)
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("👤 Thông tin người dùng:");
        console.log("Tên:", formData.name);
        console.log("Tuổi:", formData.age);
        console.log("Giới tính:", formData.gender);
        console.log("Sở thích:", formData.hobby); // Dạng mảng
    };

    return (
        <div>
            <h2>📄 Khai báo thông tin cá nhân</h2>
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
                    <label>Tuổi:</label><br />
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Giới tính:</label><br />
                    {["Nam", "Nữ", "Khác"].map((g) => (
                        <label key={g} style={{ marginRight: "10px" }}>
                            <input
                                type="radio"
                                name="gender"
                                value={g}
                                checked={formData.gender === g}
                                onChange={handleChange}
                            />
                            {g}
                        </label>
                    ))}
                </div>

                <br />

                <div>
                    <label>Sở thích:</label><br />
                    {["Đọc sách", "Du lịch", "Thể thao", "Game"].map((h) => (
                        <label key={h} style={{ marginRight: "10px" }}>
                            <input
                                type="checkbox"
                                name="hobby"
                                value={h}
                                checked={formData.hobby.includes(h)}
                                onChange={handleChange}
                            />
                            {h}
                        </label>
                    ))}
                </div>

                <br />
                <button type="submit">Gửi thông tin</button>
            </form>
        </div>
    );
}

export default PersonalInfoForm;
