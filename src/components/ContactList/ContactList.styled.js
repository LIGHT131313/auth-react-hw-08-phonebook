import styled from 'styled-components';

export const List = styled.ul`
  box-shadow: ${p => p.theme.boxSh.one}, ${p => p.theme.boxSh.two},
    ${p => p.theme.boxSh.three};
  border-radius: ${p => p.theme.borRad};
  padding-top: ${p => p.theme.spacing(1)};
  padding-right: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(1)};
  padding-left: ${p => p.theme.spacing(3)};
  background-color: ${p => p.theme.colors.green};
  height: 100%;
`;

export const ListMes = styled.p`
  margin-top: ${p => p.theme.spacing(2)};
  margin-left: ${p => p.theme.spacing(2)};
`;
