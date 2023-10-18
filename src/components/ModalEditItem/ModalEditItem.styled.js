import styled from 'styled-components';
import { Form } from 'formik';

export const StyledEditForm = styled(Form)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border-radius: 4px;
  box-shadow: ${p => p.theme.boxSh.one}, ${p => p.theme.boxSh.two},
    ${p => p.theme.boxSh.three};
  background-color: ${p => p.theme.colors.green};
  padding: 16px;
`;

export const EditBtnWrap = styled.div`
  display: flex;
`;

export const EditBtn = styled.button`
  display: block;
  margin-top: ${p => p.theme.spacing(1)};
  border-radius: ${p => p.theme.borRad};
  border: 1px solid ${p => p.theme.colors.grey};
  width: 100%;
  padding: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: ${p => p.theme.spacing(8)};
  }

  &:hover,
  &:focus {
    box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
    cursor: pointer;
  }
`;
