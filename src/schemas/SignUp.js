import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .trim()
    .max(100, 'Name should not be more than 100 characters')
    .required('Please enter name'),
  organization: Yup.string()
    .trim()
    .required('Please enter your organization'),
  email: Yup.string()
    .trim()
    .email('Please enter valid email')
    .required('Please enter email'),
  password: Yup.string()
    .min(8, 'Please enter at least 8 characters')
    .max(30, 'Password should not be more than 30 characters')
    .required('Please enter password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please enter confirm password'),
});

export default SignUpSchema;
