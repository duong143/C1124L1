import React from 'react';

function Greeting(props) {
    return (
        <h2>{props.message}</h2>
    );
}

// Thiết lập giá trị mặc định cho props
Greeting.defaultProps = {
    message: "Xin chào!"
};

export default Greeting;
