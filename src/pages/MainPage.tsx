const MainPage = () => {
  const ReCloudVariableImgUrl = new URL(
    '../assets/icons/ReCloud Variable.png',
    import.meta.url,
  ).href;
  const ReCloudVariableImgUrl2 = new URL(
    '../assets/icons/ReCloud Variable2.png',
    import.meta.url,
  ).href;
  const ReCloudVariableImgUrl3 = new URL(
    '../assets/icons/ReCloud Variable3.png',
    import.meta.url,
  ).href;

  return (
    <div className="onboarding">
      <ul>
        <li>
          <img src={ReCloudVariableImgUrl} alt="질문 보내기에 대한 설명 아이콘입니다" />
          <h2>질문 보내기에 대한 설명</h2>
          <p>질문 보내기에 대한 부설명 적기</p>
        </li>
        <li>
          <img
            src={ReCloudVariableImgUrl2}
            alt="링크 전달 답변 받기에 대한 설명 아이콘입니다"
          />
          <h2>링크 전달 답변 받기에 대한 설명</h2>
          <p>링크 전달 답변 받기에 대한 설명 적기</p>
        </li>
        <li>
          <img src={ReCloudVariableImgUrl3} alt="받은 답변으로 생각 기록 설명" />
          <h2>받은 답변으로 생각 기록 설명</h2>
          <p>받은 답변으로 생각 기록에 대한 설명 적기</p>
        </li>
      </ul>
      <div>
        <button>
          <span>질문 보내기 설명 슬라이드</span>
        </button>
        <button>
          <span>링크 전달 답변받기 슬라이드</span>
        </button>
        <button>
          <span>받은 답변으로 생각 기록 설명 슬라이드</span>
        </button>
      </div>
      <div>
        <button>
          <p>잘문 작성하기</p>
        </button>
        <button>
          <p>답변 확인하기</p>
        </button>
      </div>
    </div>
  );
};

export default MainPage;
