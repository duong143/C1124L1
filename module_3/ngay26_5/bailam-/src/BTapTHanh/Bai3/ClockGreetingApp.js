import { useState, useEffect } from "react";
import Clock from "./Clock";
import Greeting from "./Greeting";

function ClockGreetingApp() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Đồng hồ siêu cấp vip pro =)))</h1>
      <Clock time={time} />
      <Greeting time={time} />
    </div>
  );
}

export default ClockGreetingApp;
