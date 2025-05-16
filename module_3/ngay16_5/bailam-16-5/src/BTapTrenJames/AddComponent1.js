import React from 'react';

function AddComponent1(props) {
    return (
        <h1>Total: {props.firstNumber + props.secondNumber}</h1>
    );
}

export default AddComponent1;