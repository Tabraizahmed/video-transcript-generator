import React from 'react';

const Transcript = ({ transcript }) => {
  if (!transcript || transcript.length === 0) return null;

  return (
    <div className="transcript">
      <h2>Transcript</h2>
      {transcript.map((entry, index) => (
        <div key={index}>
          <strong>[{entry.time}]</strong> {entry.text}
        </div>
      ))}
    </div>
  );
};

export default Transcript;
