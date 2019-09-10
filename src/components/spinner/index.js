import React from 'react';

import './spinner.css';

const Spinner = () => {
  return (
      <div className="loader_wrap">
        <p className="loading">Loading...</p>
        <div className="loader"> </div>
      </div>

  );
};

export default Spinner;