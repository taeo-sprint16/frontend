import styled from 'styled-components';

interface Props {
  text: string;
  icon: string;
}

const Toast = ({ text, icon }: Props) => {
  return (
    <StyledToast>
      <img src={`/icons/${icon}`} alt="링크 아이콘" />
      {text}
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

  border: 1px solid ${({ theme }) => theme.color.gray400};
  border-radius: 20px;

  background-color: ${({ theme }) => theme.color.white};

  color: ${({ theme }) => theme.color.gray200};
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
  white-space: nowrap;
`;
