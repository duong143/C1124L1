import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import EditProduct from "./EditProduct";

function ViewProduct() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3001/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => {
            alert('không tìm thấy sản phẩm');
        });
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
      <h2>Chi tiết sản phẩm</h2>
      <img src={product.imageUrl} alt={product.name} width="200" /><br /><br />
      <strong>Tên:</strong> {product.name}<br />
      <strong>Giá:</strong> ${product.price}<br />
      <strong>Mô tả:</strong> {product.description}<br /><br />
      <Link to="/">
        <button>Quay lại danh sách</button>
      </Link>
    </div>
    )
} export default EditProduct;
