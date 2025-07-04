import { useEffect } from "react";

function Example2() {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Tick...");
        }, 2000);

        console.log("Timer đã được thiết lập");

        return () => {
            clearInterval(timer);
            console.log("Cleanup useEffect");
        };
    }, []);

    return (
        <div>
            <h2>Đang chạy timer...</h2>
        </div>
    );
}

export default Example2;
