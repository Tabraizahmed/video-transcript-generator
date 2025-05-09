import React, { useState } from 'react';

const UrlInput = ({ onSubmit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = () => {
    if (!url.trim()) return;
    onSubmit(url.trim());
  };

  return (
    <div className="url-input">
      <input
        type="text"
        placeholder="Enter YouTube URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="input"
      />
      <button onClick={handleSubmit} className="button">Transcribe</button>
    </div>
  );
};

export default UrlInput;
