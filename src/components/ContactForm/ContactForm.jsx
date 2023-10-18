import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledField,
  ErrorMsg,
  AddBtn,
} from './ContactForm.styled';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const nameRegExpMsg = `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`;
const numberRegExpMsg = `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`;

export const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required('Required').matches(nameRegExp, nameRegExpMsg),
  number: Yup.string()
    .required('Required')
    .matches(numberRegExp, numberRegExpMsg),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onAdd = (newContact, actions) => {
    const isExistName = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    const isExistNumber = contacts.some(
      contact => contact.number === newContact.number
    );

    if (isExistName) {
      alert(`Name ${newContact.name} is already in contacts.`);
      return;
    }

    if (isExistNumber) {
      alert(`Number ${newContact.number} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactFormSchema}
      onSubmit={(values, actions) => onAdd(values, actions)}
    >
      <StyledForm>
        <StyledField name="name" type="text" placeholder="Name" />
        <ErrorMsg name="name" component="div" />
        <StyledField name="number" type="tel" placeholder="Phone number" />
        <ErrorMsg name="number" component="div" />
        <AddBtn type="submit">Add contact</AddBtn>
      </StyledForm>
    </Formik>
  );
};
