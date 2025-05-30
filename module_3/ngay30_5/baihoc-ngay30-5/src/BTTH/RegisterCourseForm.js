import { useState } from "react";

function RegisterCourseForm() {
    const [formData, setFormData] = useState({
        studentName: "",
        email: "",
        age: "",
        course: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const validateEmail = (email) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.studentName.trim()) {
            alert("❌ Vui lòng nhập tên học viên.");
            return;
        }

        if (!validateEmail(formData.email)) {
            alert("❌ Email không hợp lệ.");
            return;
        }

        const ageNum = parseInt(formData.age);
        if (isNaN(ageNum) || ageNum < 10) {
            alert("❌ Tuổi phải là số và ≥ 10.");
            return;
        }

        if (!formData.course) {
            alert("❌ Vui lòng chọn khóa học.");
            return;
        }

        console.log("📚 Đăng ký lớp học:");
        console.log("Học viên:", formData.studentName);
        console.log("Email:", formData.email);
        console.log("Tuổi:", formData.age);
        console.log("Khóa học:", formData.course);
    };

    return (
        <div>
            <h2>🧑‍💻 Đăng ký lớp học lập trình</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Họ tên học viên:</label><br />
                    <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
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
                    <label>Chọn khóa học:</label><br />
                    <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                    >
                        <option value="">-- Chọn --</option>
                        <option value="JS">JavaScript</option>
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                    </select>
                </div>

                <br />
                <button type="submit">Đăng ký</button>
            </form>
        </div>
    );
}

export default RegisterCourseForm;
