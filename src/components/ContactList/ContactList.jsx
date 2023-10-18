import { useSelector } from 'react-redux';
import { List, ListMes } from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      {contacts.length > 0 ? (
        <List>
          {contacts.map(contact => (
            <ContactListItem key={contact.id} contact={contact} />
          ))}
        </List>
      ) : (
        <ListMes>No matches</ListMes>
      )}
    </>
  );
};
