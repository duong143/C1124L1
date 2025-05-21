import { useState } from 'react';

function Example2() {
    const [color, setColor] = useState('red');

    return (
        <>
        <p style={{color: `${color}`}}>color là : {color}</p>
            <button onClick={() => setColor("blue")} style={{color: "blue"}}>change color</button>
            <button onClick={() => setColor("red")} style={{color: "red"}}>change color</button>
        </>
    )
}
export default Example2