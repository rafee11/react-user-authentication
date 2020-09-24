import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Footer from '../components/footer/Footer';

import RouteEnum from '../../constants/RouteEnum';

import logo from '../../assets/images/logo.png';

const OnBoardLayout = ({ children }) => {
  const { pathname } = useLocation();

  const title = useMemo(() => {
    if (pathname === RouteEnum.SignUp) {
      return 'Sign Up';
    }
    return 'Sign In';
  }, [pathname]);

  return (
    <section className="auth-content">
      <div className="signin-col">
        <div className="container-fluid">
          <div className="header_logo">
            <Link to={RouteEnum.SignIn}>
              <img src={logo} className="pointer" alt="Optisol" />
            </Link>
          </div>
        </div>
        <div className="auth-overlay d-flex pb70 w-100">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-5 col-xl-5">
                <div className="card-container login-card">
                  <div className="card-header text-left">
                    <h2 className="theme-color1 fs28 mb-0">{title}</h2>
                  </div>
                  <div className="card-body p20">
                    <div className="row">
                      <div className="col-md-11 col-11 col-lg-11 px-0 m-auto">{children}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default OnBoardLayout;
