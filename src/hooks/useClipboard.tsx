import axios from 'axios';
import { useEffect, useState } from 'react';

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

const useClipboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleShareCodeCopy = (shareCode: string) => {
    navigator.clipboard.writeText(shareCode).then(() => setIsOpen(true));

    const res = axios({
      url: `${BASE_URL}/api/content/share`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        shareCode,
      }),
    });

    console.log(res);
  };

  useEffect(() => {
    let timeId = 0;
    if (isOpen) {
      timeId = setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    }
    return () => {
      clearTimeout(timeId);
    };
  }, [isOpen]);

  return { handleShareCodeCopy, isOpen };
};

export default useClipboard;
