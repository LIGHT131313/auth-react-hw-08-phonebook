import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { selectStore } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(selectStore);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      {items.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>Contact list is empty</p>
      )}

      <GlobalStyle />
    </Layout>
  );
};
