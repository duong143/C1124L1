import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function ProductList() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('http://localhost:3001/products');
            setProducts(res.data);
        } catch (err) {
            console.error("Lỗi khi tải dữ liệu sản phẩm: " ,err);
        }
    };
    const handleDelete = async (id) => {
        const confirm = window.confirm("bạn có chắc muốn xóa sản phẩm này??");
        if (confirm) {
            try {
                await axios.delete(`http://localhost:3001/products/${id}`);
                fetchProducts();
            } catch (err) {
                alert('lỗi khi xóa sản phẩm!!!');
            }
        }
    };
    useEffect(() => {
        fetchProducts();
    },[]);
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <Link to="/add">
                <button>Thêm sản phẩm</button>
            </Link>
                  <table border="1" cellPadding="8" style={{ marginTop: '16px', width: '100%' }}>
                  <thead>
                    <tr>
                      <th>Hình ảnh</th>
                      <th>tên</th>
                      <th>Giá</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                      <tbody>
                          {products.map(p => (
                            <tr key={p.id}>
                              <td><img src={p.imageUrl} alt={p.name} width="80" /></td>
                              <td>{p.name}</td>
                              <td>${p.price}</td>
                              <td>
                                <Link to={`/view/${p.id}`}><button type="button">Xem</button></Link>{' '}
                                <Link to={`/edit/${p.id}`}><button type="button">Sửa</button></Link>{' '}
                                <button type="button" onClick={() => handleDelete(p.id)}>Xoá</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                  </table>
        </div>
    )
} export default ProductList;