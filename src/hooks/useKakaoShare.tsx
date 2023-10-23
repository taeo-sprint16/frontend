import { useEffect } from 'react';

const API_KEY: string = import.meta.env.VITE_KAKAO_API_KEY;

const ROOT_URL = import.meta.env.PROD
  ? 'https://aboutme-ko.vercel.app'
  : 'http://localhost:5173';

const useKakaoShare = () => {
  const confirmMessage = async (confirmCode: string | null) => {
    const text = (confirmCode || '') + '확인코드가 전송되었습니다.';

    return await window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: text,
        description:
          '답변은 확인코드를 입력해야 확인할 수 있어요. 답변을 확인하러 가보세요!',
        imageUrl: '',
        link: {
          mobileWebUrl: 'https://aboutme-ko.vercel.app',
          webUrl: 'https://aboutme-ko.vercel.app',
        },
      },
      buttons: [
        {
          title: '답변 확인하기',
          link: {
            mobileWebUrl: `${ROOT_URL}/question/${confirmCode || 'confirmcode'}`,
            webUrl: `${ROOT_URL}/question/${confirmCode || 'confirmcode'}`,
          },
        },
      ],
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
