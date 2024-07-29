import React, { useState, useEffect } from "react";
let CurrentTime = () => {
  const [time, settime] = useState(new Date());
  useEffect(() => {
    let intervalId = setInterval(() => {
      settime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Finished Interval");
    };
  }, []);

  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
