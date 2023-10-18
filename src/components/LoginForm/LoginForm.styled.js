import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const LoginContainer = styled.div`
  min-height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled(Form)`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledLabel = styled(Field)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
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

export const LogInBtn = styled.button`
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
