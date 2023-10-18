import { useDispatch } from 'react-redux';
import {
  StyledForm,
  StyledLabel,
  RegisterBtn,
  RegisterContainer,
  ErrorMsg,
} from './RegisterForm.styled';
import { register } from 'redux/auth/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';

const RegisterFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onRegister = values => dispatch(register(values));

  return (
    <RegisterContainer>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegisterFormSchema}
        onSubmit={(values, actions) => {
          onRegister(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledLabel name="name" type="text" placeholder="Username" />
          <ErrorMsg name="name" component="div" />
          <StyledLabel name="email" type="email" placeholder="Email" />
          <ErrorMsg name="email" component="div" />
          <StyledLabel name="password" type="password" placeholder="Password" />
          <ErrorMsg name="password" component="div" />
          <RegisterBtn type="submit">Register</RegisterBtn>
        </StyledForm>
      </Formik>
    </RegisterContainer>
  );
};
