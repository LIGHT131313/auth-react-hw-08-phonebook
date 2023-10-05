import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ListItem, ListItemText } from './ContactListItem.styled';
import { deleteContact } from 'redux/operations';

export const ContactListItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <ListItemText>
        {name}: {phone}
        <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
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
