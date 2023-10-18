import styled from 'styled-components';

export const ListItem = styled.li`
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    border-bottom: 1px solid ${p => p.theme.colors.grey};
  }

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;
export const ListItemText = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListPhone = styled.span`
  font-size: 12px;
  text-align: end;
`;
export const BtnWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListItemBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 4px;
  border-color: transparent;
  background-color: transparent;
  cursor: pointer;
  color: #f44336;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 4px;
  }

  &:hover,
  &:focus {
    background-color: #e2e5e8;
  }
`;
