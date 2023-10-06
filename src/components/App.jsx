import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { selectStore } from 'redux/selectors';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectStore);
  const showLoader = isLoading && !error;
  const listEmpty = !isLoading && !items.length;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
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

      <GlobalStyle />
    </Layout>
  );
};
