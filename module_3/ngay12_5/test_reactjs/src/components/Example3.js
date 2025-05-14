import React from 'react';

function Example3() {
    const elementJSX = (
        <h1 className="greeting">hello</h1>
    );
    const reactCreatreElement = React.createElement(
        'h1',
        {className: 'greeting'},
        'hello'
    );
    return(
        <>
            {elementJSX}</>
    );
}
export default Example3;