import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      <p>Bạn đang xem chi tiết của sản phẩm có ID: <strong>{id}</strong></p>
    </div>
  );
}

export default ProductDetail;
