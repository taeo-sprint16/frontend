import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

function Layout() {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default Layout;

const Container = styled.main`
  max-width: ${({ theme }) => theme.maxWidth};
  min-width: ${({ theme }) => theme.minWidth};
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  margin: 0 auto;
`;
