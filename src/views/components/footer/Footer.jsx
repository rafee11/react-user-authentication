import React from 'react';
import dayjs from 'dayjs';

const Footer = () => {
  return (
    <div className="aut-footer">
      <div className="container-fluid">
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item theme-color4 fs13 fw-500">©Optisol {dayjs().format('YYYY')}</li>
          <li className="list-group-item theme-color4 fs13 fw-500">Contact</li>
          <li className="list-group-item theme-color4 fs13 fw-500">Privacy &amp; Terms</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
