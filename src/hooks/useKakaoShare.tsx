import { useEffect } from 'react';

const API_KEY: string = import.meta.env.VITE_KAKAO_API_KEY;

const useKakaoShare = () => {
  const confirmMessage = async (confirmCode: string) => {
    return await window.Kakao.Share.sendDefault({
      objectType: 'text',
      text: `${confirmCode}가 생성되었습니다.`,
      link: {
        mobileWebUrl: `http://loacalhost:5173/answer/${confirmCode}`,
        webUrl: `http://loacalhost:5173/answer/${confirmCode}`,
      },
    });
  };

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(API_KEY);
    }
  }, []);

  return { confirmMessage };
};

export default useKakaoShare;
