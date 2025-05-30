import { useState } from "react";

function CommentForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        rating: "",
        comment: ""
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
        console.log("📌 Dữ liệu bình luận:");
        console.log("Tên:", formData.name);
        console.log("Email:", formData.email);
        console.log("Đánh giá:", formData.rating + " sao");
        console.log("Bình luận:", formData.comment);
    };

    return (
        <div>
            <h2>📝 Tạo bình luận</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tên:</label><br />
                    <input
                        type="text"
                        name="name"
                        placeholder="Nhập tên của bạn..."
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
                        placeholder="Nhập email..."
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Đánh giá (1–5 sao):</label><br />
                    {[1, 2, 3, 4, 5].map((star) => (
                        <label key={star}>
                            <input
                                type="radio"
                                name="rating"
                                value={star}
                                checked={formData.rating === star.toString()}
                                onChange={handleChange}
                            />
                            {star}
                        </label>
                    ))}
                </div>

                <br />

                <div>
                    <label>Bình luận:</label><br />
                    <textarea
                        name="comment"
                        placeholder="Viết bình luận của bạn..."
                        value={formData.comment}
                        onChange={handleChange}
                        rows={4}
                        required
                    ></textarea>
                </div>

                <br />
                <button type="submit">Gửi bình luận</button>
            </form>
        </div>
    );
}

export default CommentForm;
