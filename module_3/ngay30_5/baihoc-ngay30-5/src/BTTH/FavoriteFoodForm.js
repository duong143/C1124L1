import { useState } from "react";

function FavoriteFoodForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        food: "Cơm",
        extras: [],
        note: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                extras: checked
                    ? [...prev.extras, value]
                    : prev.extras.filter((item) => item !== value)
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
        console.log("🍽️ Thông tin món ăn yêu thích:");
        console.log("Tên:", formData.name);
        console.log("Email:", formData.email);
        console.log("Món chính:", formData.food);
        console.log("Thêm món:", formData.extras);
        console.log("Ghi chú:", formData.note);
    };

    return (
        <div>
            <h2>🍜 Chọn món ăn yêu thích</h2>
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
                    <label>Món chính:</label><br />
                    <select
                        name="food"
                        value={formData.food}
                        onChange={handleChange}
                    >
                        <option value="Cơm">Cơm</option>
                        <option value="Phở">Phở</option>
                        <option value="Bún">Bún</option>
                        <option value="Mì">Mì</option>
                        <option value="Bánh mì">Bánh mì</option>
                    </select>
                </div>

                <br />

                <div>
                    <label>Món thêm:</label><br />
                    {["Trứng", "Thịt bò", "Gà", "Rau"].map((item) => (
                        <label key={item} style={{ marginRight: "10px" }}>
                            <input
                                type="checkbox"
                                name="extras"
                                value={item}
                                checked={formData.extras.includes(item)}
                                onChange={handleChange}
                            />
                            {item}
                        </label>
                    ))}
                </div>

                <br />

                <div>
                    <label>Ghi chú:</label><br />
                    <textarea
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Ghi chú thêm (nếu có)..."
                    ></textarea>
                </div>

                <br />
                <button type="submit">Gửi thông tin</button>
            </form>
        </div>
    );
}

export default FavoriteFoodForm;
