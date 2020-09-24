import React, { useState, useCallback, useMemo } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

import InputWrapper from './components/InputWrapper';
import { Button, FormError } from '../../components/commons';

import RouteEnum from '../../../constants/RouteEnum';

import { signUpSchema } from '../../../schemas';

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [showCurPass, setShowCurPass] = useState(false);
  const initialValues = useMemo(() => ({ fullName: '', organization: '', email: '', password: '', confirmPassword: '' }), []);

  const toggleSetPassword = useCallback(() => setShowPass(!showPass), [showPass]);
  const toggleSetCurPassword = useCallback(() => setShowCurPass(!showCurPass), [showCurPass]);

  const handleSubmit = useCallback((values, actions) => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, []);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={signUpSchema}>
      <Form>
        <InputWrapper label="Full Name">
          <Field name="fullName" className="form-control" />
          <ErrorMessage component={FormError} name="fullName" />
        </InputWrapper>

        <InputWrapper label="Organization Name">
          <Field name="organization" className="form-control" />
          <ErrorMessage component={FormError} name="organization" />
        </InputWrapper>

        <InputWrapper label="Email Address">
          <Field name="email" type="email" className="form-control" />
          <ErrorMessage component={FormError} name="email" />
        </InputWrapper>

        <InputWrapper label="Password" margin="2">
          <Field name="password" type={!showPass ? 'password' : 'text'} className="form-control" />
          <em className={`fas fa-eye${showPass ? '-slash' : ''} theme-color3 op-90 pointer fs13 showpass`} onClick={toggleSetPassword} />
          <ErrorMessage component={FormError} name="password" />
        </InputWrapper>

        <InputWrapper label="Confirm Password" margin="2">
          <Field name="confirmPassword" type={!showCurPass ? 'password' : 'text'} className="form-control" />
          <em className={`fas fa-eye${showCurPass ? '-slash' : ''} theme-color3 op-90 pointer fs13 showpass`} onClick={toggleSetCurPassword} />
          <ErrorMessage component={FormError} name="confirmPassword" />
        </InputWrapper>

        <div className="mt10">
          <Button type="submit" label="Submit" />
        </div>

        <div className="text-center auth-link">
          <p className="fs14 theme-color6">
            Have an account?{' '}
            <Link to={RouteEnum.SignIn} className="fs14 theme-color2 fw-700">
              Sign in
            </Link>
          </p>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUp;
