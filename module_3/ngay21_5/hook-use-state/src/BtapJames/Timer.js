import { useState, useEffect } from 'react';

function Timer() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          alert("Time’s up");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Clean up interval khi component bị unmount hoặc timer kết thúc
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Countdown: {timer} seconds</h2>
    </div>
  );
}

export default Timer;
