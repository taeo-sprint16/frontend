const useClipboard = () => {
  const handleShareCodeCopy = (shareCode: string) => {
    navigator.clipboard.writeText(shareCode);
  };

  return { handleShareCodeCopy };
};

export default useClipboard;
