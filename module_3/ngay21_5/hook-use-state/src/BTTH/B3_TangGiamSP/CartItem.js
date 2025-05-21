import React from 'react';

function CartItem({ product, onUpdateQuantity }) {
    const { id, name, quantity } = product;

    return (
        <div style={{ marginBottom: '10px' }}>
            <span>{name} - Số lượng: {quantity} </span>
            <button onClick={() => onUpdateQuantity(id, 1)} style={{ marginLeft: '10px' }}>+</button>
            <button onClick={() => onUpdateQuantity(id, -1)} style={{ marginLeft: '5px' }}>−</button>
        </div>
    );
}

export default CartItem;
