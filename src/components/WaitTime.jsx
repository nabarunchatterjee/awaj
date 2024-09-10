import { useState, useEffect } from "react";
import { timeDifference } from "../helpers";

export default function WaitTime() {
  const [waitingTime, setWaitingTime] = useState();
  useEffect(() => {
    setWaitingTime(timeDifference());
    const intervalId = setInterval(() => {
      setWaitingTime(timeDifference());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="Top">
      <header className="Header">Justice delayed is justice denied</header>
      <header className="Timer">{waitingTime}</header>
    </div>
  );
}
