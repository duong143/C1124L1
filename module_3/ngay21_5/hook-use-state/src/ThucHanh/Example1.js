import { useState } from 'react';

function Example1() {
    const  [header, setHeader] = useState('Hello');
    const [content, setContent] = useState('World');

    return (
        <div>
            <h1>{header}</h1>
            <button onClick={() => setHeader((" changed hehe"))}>click đây</button>
            <h1>{content}</h1>
            <button onClick={() => setContent((" huhuhu"))}></button>
        </div>
    )
}
export default Example1