import { useEffect, useState } from "react";
import ProductList from "./ProductList";

function Product() {
    const products = [
        { id: 1, name: "Tuấn Anh", price: 1000000 },
        { id: 2, name: "Phương Linh", price: 2000000 },
        { id: 3, name: "Minh An", price: 3000000 },
        { id: 4, name: "Nguyễn Thành", price: 4000000 },
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [discountPrice, setDiscountPrice] = useState(null);

    useEffect(() => {
        if (selectedProduct) {
            const timer = setTimeout(() => {
                const discount = Math.random() * 0.3; // giảm giá tối đa 30%
                const newPrice = selectedProduct.price * (1 - discount);
                setDiscountPrice(newPrice.toFixed(2));
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [selectedProduct]); // ✅ Dependency array đúng vị trí

    return (
        <div>
            <ProductList products={products} setSelectedProduct={setSelectedProduct} />
            {
                selectedProduct && (
                    <div>
                        <h2>Thông tin sản phẩm</h2>
                        <p>Tên: {selectedProduct.name}</p>
                        <p>Giá gốc: {selectedProduct.price}</p>
                        <p>Giá sale: {discountPrice ? `${discountPrice}₫` : "đang tính..."}</p>
                    </div>
                )
            }
        </div>
    );
}

export default Product;
