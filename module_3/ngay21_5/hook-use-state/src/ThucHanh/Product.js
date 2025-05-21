import {useState} from 'react'
import ProductItem from "./ProductItem";

function Product(){
    let [products, setProducts] = useState([
    {id: 1, name:"iphone", votes: 0 },
    {id: 2, name:"samsung", votes: 0 },
    {id: 3, name:"xiaomi", votes: 0 },
    {id: 4, name:"huawei", votes: 0 },
    ]);

    const hadnleVote = (id) => {
        setProducts(
            (prev) => prev.map(
                (product) => product.id === id ? {...product, votes: product.votes + 1} : product
            )
        )
    }

    return(
        <div>
            <h1>Bình chọn sản phẩm</h1>
            <ProductItem onVote={hadnleVote}
            products={products}/>
        </div>
    )
} export default Product