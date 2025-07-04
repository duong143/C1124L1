import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function EditProduct() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name:"",
        description:"",
        imageUrl:"",
        price:""
    });

    useEffect(() => {
        axios.get(`http://localhost:3001/products/${id}`)
        .then(res => setProduct(res.data))
            .catch(err => {
                alert('không tìm thấy sản phẩm');
                navigate('/');
            });
    },[id, navigate]);

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/products/${id}`, product);
            navigate('/');
        }
        catch (err) {
            alert('cập nhật thất bại');
        }
    };

    return (
       <div>
      <h2>✏️ Chỉnh sửa sản phẩm</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên sản phẩm:</label><br />
          <input type="text" name="name" value={product.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Giá:</label><br />
          <input type="number" name="price" value={product.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Link ảnh:</label><br />
          <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleChange} />
        </div>
        <div>
          <label>Mô tả:</label><br />
          <textarea name="description" value={product.description} onChange={handleChange} />
        </div>
        <button type="submit">Cập nhật</button>
      </form>
    </div>
    );
} export default EditProduct;