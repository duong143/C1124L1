function ProductList({ products, setSelectedProduct }) {
    return (
        <div className="list-product">
            <h1>Danh sách sản phẩm</h1>
            <ul>
                {products.map(item => (
                    <li key={item.id} onClick={() => setSelectedProduct(item)}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
