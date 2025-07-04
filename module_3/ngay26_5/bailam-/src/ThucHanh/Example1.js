import { useState, useEffect } from 'react';

function Example1() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => {
                console.log(prevCount + 1); // log giá trị mới
                return prevCount + 1;
            });
        }, 1000);

        // Cleanup interval khi component unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    );
}

export default Example1;
