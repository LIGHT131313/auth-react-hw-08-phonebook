import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  background-color: ${p => p.theme.colors.green};
  padding: ${p => p.theme.spacing(3)};
  border-radius: ${p => p.theme.borRad};
  margin-bottom: ${p => p.theme.spacing(3)};
  box-shadow: ${p => p.theme.boxSh.one}, ${p => p.theme.boxSh.two},
    ${p => p.theme.boxSh.three};
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 8px;
  border-radius: ${p => p.theme.borRad};
  border: 1px solid transparent;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(1)};
  }
  &:hover,
  &:focus {
    box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
    outline-color: ${p => p.theme.colors.grey};
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: ${p => p.theme.colors.red};
  font-style: italic;
  font-size: 12px;
  margin-bottom: ${p => p.theme.spacing(2)};
`;

export const AddBtn = styled.button`
  display: block;
  margin-top: ${p => p.theme.spacing(1)};
  border-radius: ${p => p.theme.borRad};
  border: 1px solid ${p => p.theme.colors.grey};
  width: 100%;
  padding: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
    cursor: pointer;
  }
`;
