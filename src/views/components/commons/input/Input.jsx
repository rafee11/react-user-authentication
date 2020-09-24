import React from 'react';

const Input = ({ ...props }) => {
  console.log(props);
  return <input {...props} />;
};

export default Input;
