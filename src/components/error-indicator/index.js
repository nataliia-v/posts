import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
  return (
      <div className="error-indicator">
        <img className='icon' width={200} src='https://cdn.windowsreport.com/wp-content/uploads/2019/02/Ddkmd.sys-blue-screen-errors-in-Windows.jpg' alt="error icon"/>
        <p className="boom">Oops...</p>
        <p>
          something went wrong
        </p>
      </div>
  );
};

export default ErrorIndicator;