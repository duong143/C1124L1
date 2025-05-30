import { useState } from "react";

function ProductReviewForm() {
    const [formData, setFormData] = useState({
        productId: "",
        rating: "",
        review: ""
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

        const rating = parseInt(formData.rating);

        if (!formData.productId.trim()) {
            alert("❌ Vui lòng nhập mã sản phẩm.");
            return;
        }

        if (isNaN(rating) || rating < 1 || rating > 5) {
            alert("❌ Đánh giá phải là số từ 1 đến 5.");
            return;
        }

        if (!formData.review.trim()) {
            alert("❌ Vui lòng nhập nội dung đánh giá.");
            return;
        }

        console.log("📝 Đánh giá sản phẩm:");
        console.log("Mã sản phẩm:", formData.productId);
        console.log("Đánh giá:", rating);
        console.log("Nội dung:", formData.review);
    };

    return (
        <div>
            <h2>📝 Đánh giá sản phẩm</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Mã sản phẩm:</label><br />
                    <input
                        type="text"
                        name="productId"
                        value={formData.productId}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <div>
                    <label>Đánh giá (1 - 5):</label><br />
                    <input
                        type="number"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        min="1"
                        max="5"
                    />
                </div>

                <br />

                <div>
                    <label>Nội dung đánh giá:</label><br />
                    <textarea
                        name="review"
                        value={formData.review}
                        onChange={handleChange}
                        rows="4"
                    />
                </div>

                <br />
                <button type="submit">Gửi đánh giá</button>
            </form>
        </div>
    );
}

export default ProductReviewForm;
