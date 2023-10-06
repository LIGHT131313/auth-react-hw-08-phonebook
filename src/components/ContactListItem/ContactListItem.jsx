import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  ListItem,
  ListItemText,
  ListPhone,
  ListBtn,
} from './ContactListItem.styled';
import { deleteContact } from 'redux/operations';
import { BiTrash } from 'react-icons/bi';
import { selectIsLoading } from 'redux/selectors';

export const ContactListItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <ListItem>
      <ListItemText>
        <span>
          {name}: <ListPhone>{phone}</ListPhone>
        </span>
        <ListBtn
          aria-label="Delete contact"
          disabled={isLoading}
          onClick={() => dispatch(deleteContact(id))}
        >
          <BiTrash size={16} />
        </ListBtn>
      </ListItemText>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
