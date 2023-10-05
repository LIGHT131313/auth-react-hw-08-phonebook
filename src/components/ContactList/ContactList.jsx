import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { selectVisibleContacts } from 'redux/selectors';

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
        <p>No matches</p>
      )}
    </>
  );
};
