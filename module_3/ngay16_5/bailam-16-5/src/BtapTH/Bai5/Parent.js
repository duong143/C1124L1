import React from 'react';
import Child from './Child';

function Parent() {
    const info = "Dữ liệu từ cha";
    return (
        <div>
            <Child data={info} />
        </div>
    );
}

export default Parent;
