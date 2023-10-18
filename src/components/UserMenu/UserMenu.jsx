import { useAuth } from 'hooks';
import {
  UserLogOutBtn,
  UserMenuName,
  UserMenuWrapper,
} from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <UserMenuWrapper>
      <UserMenuName>Welcome, {user.email}</UserMenuName>
      <UserLogOutBtn type="button" onClick={handleLogOut}>
        Logout
      </UserLogOutBtn>
    </UserMenuWrapper>
  );
};
