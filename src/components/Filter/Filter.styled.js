import styled from 'styled-components';

export const InputFilter = styled.input`
  max-width: 180px;
  margin-top: ${p => p.theme.spacing(1)};
  margin-bottom: ${p => p.theme.spacing(1)};
  padding: 8px;
  border-radius: ${p => p.theme.borRad};
  border: 1px solid ${p => p.theme.colors.grey};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1px solid ${p => p.theme.colors.grey};
    outline-color: ${p => p.theme.colors.grey};
    box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
  }
`;
