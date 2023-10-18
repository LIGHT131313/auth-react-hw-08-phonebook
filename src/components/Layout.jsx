import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Container } from './Layout.styled';
import { AppBar } from './AppBar/AppBar';
import { GlobalStyle } from './GlobalStyles';

export const Layout = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <GlobalStyle />
    </>
  );
};
