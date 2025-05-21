function ProductItem({ products, onVote }) {
    return (
        <ul>
            {
                products.map((product) => (
                    <li key={product.id}>
                        {product.name} - votes: {product.votes}
                        <button
                            onClick={() => onVote(product.id)}
                            style={{ marginLeft: "10px" }}
                        >
                            Vote
                        </button>
                    </li>
                ))
            }
        </ul>
    );
}

export default ProductItem;
