import { useEffect, useState } from 'react';

const useClipboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleShareCodeCopy = (shareCode: string) => {
    navigator.clipboard.writeText(shareCode).then(() => setIsOpen(true));
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
