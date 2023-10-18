import { useDispatch } from 'react-redux';
import {
  StyledForm,
  StyledLabel,
  ErrorMsg,
  LogInBtn,
  LoginContainer,
} from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginFormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onLogIn = values => dispatch(logIn(values));

  return (
    <LoginContainer>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginFormSchema}
        onSubmit={(values, actions) => {
          onLogIn(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledLabel name="email" type="email" placeholder="Email" />
          <ErrorMsg name="email" component="div" />
          <StyledLabel name="password" type="password" placeholder="Password" />
          <ErrorMsg name="password" component="div" />
          <LogInBtn type="submit">Log In</LogInBtn>
        </StyledForm>
      </Formik>
    </LoginContainer>
  );
};
