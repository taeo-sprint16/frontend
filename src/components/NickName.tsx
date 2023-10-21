import { styled } from 'styled-components';

const NickName = () => {
  return (
    <StyledQuestionContainer>
      <UserIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M6.6665 11.3333C6.6665 16.488 10.8452 20.6667 15.9998 20.6667C21.1545 20.6667 25.3332 16.488 25.3332 11.3333C25.3332 6.17867 21.1545 2 15.9998 2C10.8452 2 6.6665 6.17867 6.6665 11.3333Z"
            fill="#EAF1FF"
          />
          <path
            d="M6.6665 11.3333C11.546 11.3099 15.5492 7.22147 15.9998 2C11.1204 2.02345 7.1171 6.11185 6.6665 11.3333Z"
            fill="#DEE7FA"
          />
          <path
            d="M25.3333 11.3333C20.4539 11.3099 16.4506 7.22147 16 2C20.8795 2.02345 24.8827 6.11185 25.3333 11.3333Z"
            fill="#DEE7FA"
          />
          <path
            d="M12.2343 19.8762C8.8383 20.8892 6.1833 23.2338 5.1431 26.1701C4.57884 27.7629 5.74788 29.2611 7.42084 29.4988C9.21937 29.7545 11.991 30.0003 15.9998 30.0003C20.0086 30.0003 22.7803 29.7545 24.5788 29.4988C26.2518 29.2611 27.4208 27.7629 26.8566 26.1701C25.8164 23.2339 23.1614 20.8892 19.7653 19.8762C18.6136 20.3846 17.3397 20.667 15.9998 20.667C14.66 20.667 13.386 20.3846 12.2343 19.8762Z"
            fill="#DEE7FA"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.9998 3C11.3975 3 7.6665 6.73096 7.6665 11.3333C7.6665 15.9357 11.3975 19.6667 15.9998 19.6667C20.6022 19.6667 24.3332 15.9357 24.3332 11.3333C24.3332 6.73096 20.6022 3 15.9998 3ZM5.6665 11.3333C5.6665 5.62639 10.2929 1 15.9998 1C21.7068 1 26.3332 5.62639 26.3332 11.3333C26.3332 17.0403 21.7068 21.6667 15.9998 21.6667C10.2929 21.6667 5.6665 17.0403 5.6665 11.3333Z"
            fill="#86AFF4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1927 19.5899C13.3506 20.1191 13.0495 20.6762 12.5203 20.834C9.37861 21.7712 7.00253 23.9159 6.08581 26.5035C5.78394 27.3557 6.35207 28.3364 7.56168 28.5084L7.42095 29.4984L7.56168 28.5084C9.3074 28.7565 12.0315 28.9998 15.9999 28.9998C19.9683 28.9998 22.6925 28.7565 24.4382 28.5084C25.6478 28.3364 26.2159 27.3556 25.9141 26.5035C24.9974 23.9159 22.6213 21.7712 19.4796 20.834C18.9503 20.6762 18.6493 20.1192 18.8071 19.5899C18.965 19.0607 19.522 18.7596 20.0513 18.9175C23.7017 20.0063 26.6356 22.5509 27.7993 25.8357L26.8567 26.1696L27.7993 25.8357C28.6259 28.1692 26.8559 30.1848 24.7196 30.4885L24.7196 30.4885C22.8683 30.7516 20.049 30.9998 15.9999 30.9998C11.9508 30.9998 9.13159 30.7516 7.28025 30.4885L7.28022 30.4885C5.1439 30.1848 3.37395 28.1692 4.20062 25.8357L5.14321 26.1696L4.20062 25.8357C5.36428 22.5509 8.29822 20.0063 11.9486 18.9175C12.4778 18.7596 13.0348 19.0607 13.1927 19.5899Z"
            fill="#86AFF4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.9998 1C16.5521 1 16.9998 1.44772 16.9998 2C16.9998 6.60238 20.7308 10.3333 25.3332 10.3333C25.8855 10.3333 26.3332 10.781 26.3332 11.3333C26.3332 11.8856 25.8855 12.3333 25.3332 12.3333C21.2157 12.3333 17.6607 9.92511 15.9998 6.44033C14.339 9.92511 10.784 12.3333 6.6665 12.3333C6.11422 12.3333 5.6665 11.8856 5.6665 11.3333C5.6665 10.781 6.11422 10.3333 6.6665 10.3333C11.2689 10.3333 14.9998 6.60238 14.9998 2C14.9998 1.44772 15.4476 1 15.9998 1Z"
            fill="#86AFF4"
          />
          <path
            d="M19.5025 16.2153C19.8055 15.7536 19.6769 15.1336 19.2151 14.8306C18.7534 14.5276 18.1334 14.6562 17.8304 15.118L19.5025 16.2153ZM14.1692 15.118C13.8661 14.6562 13.2462 14.5276 12.7845 14.8306C12.3227 15.1336 12.1941 15.7536 12.4971 16.2153L14.1692 15.118ZM17.8304 15.118C17.4701 15.6671 16.7805 16 15.9998 16C15.2191 16 14.5295 15.6671 14.1692 15.118L12.4971 16.2153C13.3034 17.4439 14.6971 18 15.9998 18C17.3025 18 18.6962 17.4439 19.5025 16.2153L17.8304 15.118Z"
            fill="#86AFF4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.6665 11C13.2188 11 13.6665 11.4477 13.6665 12V12.3333C13.6665 12.8856 13.2188 13.3333 12.6665 13.3333C12.1142 13.3333 11.6665 12.8856 11.6665 12.3333V12C11.6665 11.4477 12.1142 11 12.6665 11Z"
            fill="#86AFF4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.334 11C19.8863 11 20.334 11.4477 20.334 12V12.3333C20.334 12.8856 19.8863 13.3333 19.334 13.3333C18.7817 13.3333 18.334 12.8856 18.334 12.3333V12C18.334 11.4477 18.7817 11 19.334 11Z"
            fill="#86AFF4"
          />
        </svg>
      </UserIcon>
      <Wrapper>
        <Title>
          <span>질문자님의 닉네임을 입력해주세요.</span>
          <span> 적어주신 닉네임은 답변자에게 공유됩니다.</span>
        </Title>
        <PlaceHolder type="text" placeholder="닉네임을 입력하세요." />
      </Wrapper>
      <CompleteButton>다음</CompleteButton>
    </StyledQuestionContainer>
  );
};

const StyledQuestionContainer = styled.div`
  margin-top: 85px;
  width: 375px;
  height: 812px;
  background: #fff;
`;

const UserIcon = styled.svg`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  margin-bottom: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 327px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  span:nth-child(1),
  span:nth-child(2) {
    font-weight: bold;
  }
  span:nth-child(1) {
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
  }
  span:nth-child(2) {
    color: #939394;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    text-transform: capitalize;
  }
`;

const PlaceHolder = styled.input`
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border: none;
  margin-bottom: 453px;
  &::placeholder {
    padding-right: 15px;
  }
`;

const CompleteButton = styled.button`
  display: flex;
  width: 375px;
  height: 48px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 24px;
  background: #86aff4;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    background: #7aa3e9;
  }
`;

export default NickName;
