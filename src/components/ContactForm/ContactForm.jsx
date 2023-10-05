import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledField,
  ErrorMsg,
  AddBtn,
} from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const nameRegExpMsg = `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`;
const phoneRegExpMsg = `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`;

const PhonebookSchema = Yup.object().shape({
  name: Yup.string().required('Required').matches(nameRegExp, nameRegExpMsg),
  phone: Yup.string().required('Required').matches(phoneRegExp, phoneRegExpMsg),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onAdd = newContact => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={PhonebookSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <StyledField name="name" type="text" placeholder="Name" />
        <ErrorMsg name="name" component="div" />
        <StyledField name="phone" type="tel" placeholder="Phone number" />
        <ErrorMsg name="phone" component="div" />
        <AddBtn type="submit">Add contact</AddBtn>
      </StyledForm>
    </Formik>
  );
};
