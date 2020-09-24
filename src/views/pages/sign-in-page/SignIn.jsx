import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Button, FormError } from '../../components/commons';

import RouteEnum from '../../../constants/RouteEnum';

import { SignInSchema } from '../../../schemas';

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  const initialValues = useMemo(() => ({ email: '', password: '', rememberme: true }), []);

  const toggleSetPassword = useCallback(() => setShowPass(!showPass), [showPass]);

  const handleSubmit = useCallback((values, actions) => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, []);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={SignInSchema}>
      <Form>
        <div className="row">
          <div className="col-md-12 mb-1">
            <div className="form-group">
              <label className="theme-color2 fs14 fw-600 op-90" htmlFor="email">
                Email
              </label>
              <Field name="email" type="email" className="form-control" placeholder="Enter Email" />
              <ErrorMessage component={FormError} name="email" />
            </div>

            <div className="mb-2">
              <label className="theme-color2 fs14 fw-600 op-90" htmlFor="password">
                Password
              </label>
              <div className="input-group">
                <Field name="password" type={!showPass ? 'password' : 'text'} className="form-control" placeholder="Enter Password" />
                <div className="input-group-append" onClick={toggleSetPassword}>
                  <span className="input-group-text">
                    <em className={`fas fa-eye${!showPass ? '-slash' : ''} theme-color3 op-90 pointer fs13`}> </em>
                  </span>
                </div>
              </div>
              <ErrorMessage component={FormError} name="password" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-md-6">
            <div className="custom-control custom-checkbox mr-sm-2 theme-color3">
              <Field name="rememberme" type="checkbox" className="custom-control-input" />
              <label className="custom-control-label c-pointer fs12" htmlFor="rememberme">
                Remember Me
              </label>
            </div>
          </div>

          <div className="col-6 col-md-6">
            <span className="c-pointer theme-color4 float-right fs12">Forgot Password?</span>
          </div>
        </div>

        <div className="mt50">
          <Button type="submit" label="Submit" />
        </div>

        <div className="text-center auth-link">
          <p className="fs14 theme-color6">
            Don't have a Account?{' '}
            <Link to={RouteEnum.SignUp} className="fs14 theme-color2 fw-700">
              Sign up
            </Link>
          </p>
        </div>
      </Form>
    </Formik>
  );
};

export default SignIn;
