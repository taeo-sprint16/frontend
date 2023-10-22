import { useEffect, useState } from 'react';

const LoadingDots = () => {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots === '...') {
          return '.';
        } else {
          return prevDots + '.';
        }
      });
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span>{dots}</span>;
};

export default LoadingDots;
