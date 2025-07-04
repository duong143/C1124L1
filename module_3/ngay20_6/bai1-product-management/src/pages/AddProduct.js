import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function AddProduct() {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
        imageUrl: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/products', product);
            navigate('/');
        } catch (err){
            alert('thêm sản phẩm thất bại');
        }
    };
    return (
        <div>
            <h2>thêm sản phẩm mới</h2>
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
        <button type="submit">Lưu</button>
      </form>
        </div>
    );
} export default AddProduct;