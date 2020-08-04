import React from 'react';
import './input.css';

const Input = ({ ...props }) => {
  return (
    <div className="Input">
      <input {...props} />
    </div>
  );
};

export default Input;
