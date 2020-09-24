import React from 'react';
import classnames from 'classnames';

const CustomButton = ({ type = 'button', label, className = '' }) => {
  let defaultClass = ['btn theme-btn1 auth-btn btn-block text-white my-4'];

  if (className) {
    defaultClass.push(className);
  }

  defaultClass = classnames(defaultClass);

  return (
    <button type={type} className={defaultClass}>
      {label}
    </button>
  );
};

export default CustomButton;
