import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [transcript, setTranscript] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTranscript('');
    setError('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/transcribe', {
        youtubeUrl,
      });

      setTranscript(res.data.transcript);
    } catch (err) {
      console.error(err);
      setError('Failed to transcribe the video.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>YouTube Video Transcriber</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Transcribing...' : 'Transcribe'}
        </button>
      </form>

      {error && <p className="error">{error}</p>}
      {transcript && (
        <div className="transcript">
          <h2>Transcript:</h2>
          <pre>{transcript}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
