import React from 'react';

const InputWrapper = ({ label, children, margin = 1 }) => {
  return (
    <div className="row">
      <div className={`col-md-12 mb-${margin}`}>
        <label className="theme-color2 fs14 fw-600 op-90">{label}</label>
        <div className="form-group">{children}</div>
      </div>
    </div>
  );
};

export default InputWrapper;
