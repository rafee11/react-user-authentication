import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Please enter valid email')
    .required('Please enter email'),
  password: Yup.string()
    .min(8, 'Password must container at least 8 characters')
    .max(30, 'Password should not be more than 30 characters')
    .required('Please enter password'),
  rememberme: Yup.boolean(),
});

export default SignInSchema;
