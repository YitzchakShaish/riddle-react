import { useEffect, useRef, useState } from "react";

export function useTimer() {
  const idRef = useRef(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      idRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => {
      if (idRef.current) clearInterval(idRef.current);
    };
  }, [running]);

  const start = () => {
    setSeconds(0);
    setRunning(true);
  };
  const stop = () => {
    setRunning(false);
  };

  return { seconds, start, stop, running };
}
