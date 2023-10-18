import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeTitle = styled.h1`
  font-weight: 500;
  text-align: center;
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const HomeLogo = styled.img`
  width: 240px;
  height: 240px;
  margin-left: auto;
  margin-right: auto;
`;
