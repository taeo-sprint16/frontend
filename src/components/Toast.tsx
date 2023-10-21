import styled from 'styled-components';

const Toast = () => {
  return (
    <StyledToast>
      <img src="/icons/link.svg" alt="링크 아이콘" />
      질문 링크가 복사됐어요
    </StyledToast>
  );
};

export default Toast;

const StyledToast = styled.span`
  cursor: default;

  padding: 7.5px 16px;
  margin: 0 auto;
  width: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;

  border: 1px solid ${({ theme }) => theme.color.gray300};
  border-radius: 20px;

  color: ${({ theme }) => theme.color.gray200};
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
  white-space: nowrap;
`;
