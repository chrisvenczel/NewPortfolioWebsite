import React from 'react';
import './Website.css';

// This contains the entire website
function Website(): React.ReactNode {

  return (
    <div className="main">
      <h3>Chris Venczel</h3>
      This is a <a>link</a> and  some text.
    </div>
  );
}

export default Website;
