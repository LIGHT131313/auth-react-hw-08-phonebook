import PropTypes from 'prop-types';
import { editContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@mui/material/Modal';
import { ContactFormSchema } from 'components/ContactForm/ContactForm';
import { Formik } from 'formik';
import { StyledField, ErrorMsg } from '../ContactForm/ContactForm.styled';
import { StyledEditForm, EditBtn, EditBtnWrap } from './ModalEditItem.styled';
import { selectContacts } from 'redux/contacts/selectors';

export const ModalEditItem = ({
  open,
  close,
  contact: { id, name, number },
}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onApply = editedContactValues => {
    const isExistName = contacts.some(
      contact =>
        contact.name.toLowerCase() === editedContactValues.name.toLowerCase() &&
        id !== contact.id
    );
    const isExistNumber = contacts.some(
      contact =>
        contact.number === editedContactValues.number && id !== contact.id
    );
    const isSameName =
      name.toLowerCase() === editedContactValues.name.toLowerCase();
    const isSameNumber = number === editedContactValues.number;

    if (isSameName && isSameNumber) {
      alert(`Please enter new values`);
      return;
    }
    if (isExistName) {
      alert(`Name ${editedContactValues.name} is already in contacts.`);
      return;
    }
    if (isExistNumber) {
      alert(`Number ${editedContactValues.number} is already in contacts.`);
      return;
    }

    dispatch(editContact(editedContactValues));
    close();
  };

  return (
    <div>
      <Modal open={open} onClose={close}>
        <>
          <Formik
            initialValues={{ id, name, number }}
            validationSchema={ContactFormSchema}
            onSubmit={values => onApply(values)}
          >
            <StyledEditForm>
              <StyledField name="name" type="text" placeholder="Name" />
              <ErrorMsg name="name" component="div" />
              <StyledField
                name="number"
                type="tel"
                placeholder="Phone number"
              />
              <ErrorMsg name="number" component="div" />

              <EditBtnWrap>
                <EditBtn type="submit">Apply</EditBtn>
                <EditBtn type="button" onClick={close}>
                  Cancel
                </EditBtn>
              </EditBtnWrap>
            </StyledEditForm>
          </Formik>
        </>
      </Modal>
    </div>
  );
};

ModalEditItem.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
