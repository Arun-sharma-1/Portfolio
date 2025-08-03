import { useEffect, useRef } from "react";

const useThrottle = (fn: any, delay: number) => {
  const timerRef: any = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return function (...args: any) {
    if (!timerRef.current) {
      fn(args);
      timerRef.current = setTimeout(() => {
          timerRef.current = null;
      }, delay);
    }
  };
};

export default useThrottle;
