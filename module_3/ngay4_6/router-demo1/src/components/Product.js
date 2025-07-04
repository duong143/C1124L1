function Product() {
    const products = ["Laptop", "macbook", "iphone"]
    return (
        <div>
            <ul>
                {
                    products.map((product, index) => (
                        <li key={index}>{product}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Product;