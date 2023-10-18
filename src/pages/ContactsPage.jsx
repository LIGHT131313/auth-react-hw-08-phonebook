import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { selectStore } from 'redux/contacts/selectors';
import { Loader } from '../components/Loader/Loader';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectStore);
  const showLoader = isLoading && !error;
  const listEmpty = !isLoading && !items.length;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {showLoader && <Loader />}
      {items.length > 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      {listEmpty && <p>Contact list is empty</p>}
    </div>
  );
}
