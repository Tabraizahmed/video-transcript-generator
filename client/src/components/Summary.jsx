import React from 'react';

const Summary = ({ text }) => {
  if (!text) return null;

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>{text}</p>
    </div>
  );
};

export default Summary;
