import React from 'react';

function ShowMessage(props) {
    return (
        <>
            <h1>{props.menuInfo.title}</h1>
            <p>{props.menuInfo.description}</p>
            <p>{props.menuInfo.price}</p>
            <h1>list menu item</h1>
            <ul>
                {props.items.map(((item, index) =>
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ShowMessage;
