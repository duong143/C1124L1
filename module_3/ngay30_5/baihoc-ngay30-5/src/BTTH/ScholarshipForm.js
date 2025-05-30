import { useState } from "react";

function ScholarshipForm() {
    const [formData, setFormData] = useState({
        studentName: "",
        GPA: "",
        familyIncome: "",
        major: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const gpa = parseFloat(formData.GPA);
        const income = parseFloat(formData.familyIncome);

        if (!formData.studentName.trim()) {
            alert("❌ Vui lòng nhập tên sinh viên.");
            return;
        }

        if (isNaN(gpa) || gpa < 0 || gpa > 4) {
            alert("❌ GPA phải là số từ 0 đến 4.");
            return;
        }

        if (isNaN(income) || income < 0) {
            alert("❌ Thu nhập gia đình phải là số không âm.");
            return;
        }

        if (!formData.major) {
            alert("❌ Vui lòng chọn chuyên ngành.");
            return;
        }

        console.log("🎓 Đăng ký học bổng:");
        console.log("Họ tên sinh viên:", formData.studentName);
        console.log("GPA:", gpa);
        console.log("Thu nhập gia đình:", income);
        console.log("Chuyên ngành:", formData.major);
    };

    return (
        <div>
            <h2>🎓 Đăng ký học bổng</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Họ tên sinh viên:</label><br />
                    <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <div>
                    <label>GPA (0 - 4):</label><br />
                    <input
                        type="number"
                        name="GPA"
                        step="0.01"
                        value={formData.GPA}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <div>
                    <label>Thu nhập gia đình:</label><br />
                    <input
                        type="number"
                        name="familyIncome"
                        value={formData.familyIncome}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <div>
                    <label>Chuyên ngành:</label><br />
                    <select
                        name="major"
                        value={formData.major}
                        onChange={handleChange}
                    >
                        <option value="">-- Chọn chuyên ngành --</option>
                        <option value="Công nghệ thông tin">Công nghệ thông tin</option>
                        <option value="Kinh tế">Kinh tế</option>
                        <option value="Y dược">Y dược</option>
                        <option value="Kỹ thuật">Kỹ thuật</option>
                    </select>
                </div>

                <br />
                <button type="submit">Nộp đơn</button>
            </form>
        </div>
    );
}

export default ScholarshipForm;
