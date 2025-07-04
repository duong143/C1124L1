// pages/products/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    if (id !== undefined && products[id]) {
      setProduct(products[id]);
    }
  }, [id]);

  if (!product) return <div className="container">Đang tải...</div>;

  return (
    <div className="container">
      <h2>Chi tiết sản phẩm</h2>
      <p><strong>Tên:</strong> {product.name}</p>
      <p><strong>Mô tả:</strong> {product.desc}</p>
      <p><strong>Giá:</strong> {product.price}</p>
    </div>
  );
}
