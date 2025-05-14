import React from 'react';

function Example4() {
    let myStyle ={
        color: 'red',
        backgroundColor: 'blue',
        fontfamily: 'Arial',
        fontSize: '12px'
    };
    const linkElement = (
        <a href="https://www.facebook.com/" target="_blank" className="link" >ấn zô đauya</a>
    )
    const nestedElement = (
        <div className="container">
            <p style={myStyle}>ahaishdkahs</p>
            <span>ádasdasdasdasdasdas</span>
        </div>
    );
    return(
        <>
            {nestedElement}
            {linkElement}
        </>
    );
}
export default Example4;