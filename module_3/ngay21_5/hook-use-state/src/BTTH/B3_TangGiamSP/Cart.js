import React from 'react';
import CartItem from './CartItem';

function Cart({ products, onUpdateQuantity }) {
    return (
        <div>
            {products.map(product => (
                <CartItem
                    key={product.id}
                    product={product}
                    onUpdateQuantity={onUpdateQuantity}
                />
            ))}
        </div>
    );
}

export default Cart;
