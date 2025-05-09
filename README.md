# 🎙️ YouTube Audio Transcriber with OpenAI Whisper

A full-stack app to download audio from YouTube videos, convert it to MP3, and transcribe the audio using OpenAI’s Whisper model — all via a simple web interface.

---

## ✨ Features

- ✅ Paste a YouTube video URL
- 🎧 Download and extract audio as MP3 using `yt-dlp` and `ffmpeg`
- 🤖 Transcribe audio using OpenAI Whisper
- 🗣️ Supports multi-language transcription (optional)
- 📄 Display transcript on the page
- 🚀 Node.js + Express backend with modern frontend

---

## 📁 Project Structure

├── client/ # Frontend (HTML, CSS, JS)

│ └── index.html

├── uploads/ # Temporary folder for uploaded/processed audio

├── server.js # Main backend Express server

├── package.json

└── README.md



---

## ⚙️ Requirements

Make sure the following tools are installed and accessible via your system's PATH:

- [Node.js](https://nodejs.org/)
- [Python 3.9+](https://www.python.org/)
- [ffmpeg](https://ffmpeg.org/download.html)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp)
- [OpenAI Whisper](https://github.com/openai/whisper)

Install Whisper via pip:

### bash
pip install git+https://github.com/openai/whisper.git 

If you're on Windows, make sure to add the Python Scripts path to your environment variables:
# Example
C:\Users\<your-user>\AppData\Roaming\Python\Python311\Scripts

git clone https://github.com/your-username/youtube-whisper-transcriber.git
cd youtube-whisper-transcriber

npm install

### Open client/index.html directly in your browser or serve it via a simple static server.

# How It Works
Paste a YouTube URL in the UI.

The client sends the URL to the backend.

The backend uses yt-dlp and ffmpeg to extract audio.

The audio is passed to OpenAI Whisper via CLI.

The transcription is returned and shown in the UI.

# Notes
Temporary files are stored in the /uploads folder and cleaned up automatically.

Transcription is done using the base Whisper model. You can change it in server.js:

# Troubleshooting
ffmpeg not found? Add it to your system's PATH.

whisper: command not recognized? Add your Python Scripts directory to PATH.

Permission errors? Try running your terminal as Administrator (Windows) or use sudo (macOS/Linux).

# Future Enhancements
Add language dropdown to UI

Select Whisper model (tiny, base, small, medium, large)

Progress bar and UI feedback

Subtitle (SRT) file support

# Credits
Audio Transcription powered by OpenAI Whisper

Audio download via yt-dlp

Audio processing with ffmpeg
