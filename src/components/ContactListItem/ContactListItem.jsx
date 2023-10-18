import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  ListItem,
  ListItemText,
  ListPhone,
  BtnWrapper,
  ListItemBtn,
} from './ContactListItem.styled';
import { deleteContact } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ModalEditItem } from 'components/ModalEditItem/ModalEditItem';

export const ContactListItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ListItem>
      <ListItemText>
        <span>
          {name}: <ListPhone>{number}</ListPhone>
        </span>
        <BtnWrapper>
          <ListItemBtn
            aria-label="Edit contact"
            disabled={isLoading}
            onClick={handleOpen}
          >
            <EditIcon />
          </ListItemBtn>
          <ListItemBtn
            aria-label="Delete contact"
            disabled={isLoading}
            onClick={() => dispatch(deleteContact(id))}
          >
            <DeleteIcon />
          </ListItemBtn>
        </BtnWrapper>
      </ListItemText>
      <ModalEditItem open={open} close={handleClose} contact={contact} />
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
