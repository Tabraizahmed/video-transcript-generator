import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Ensure uploads directory exists
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

app.post('/api/transcribe', async (req, res) => {
  const { youtubeUrl } = req.body;

  if (!youtubeUrl) {
    return res.status(400).json({ error: 'YouTube URL is required' });
  }

  const timestamp = Date.now();
  const baseName = `audio_${timestamp}`;
  const outputPath = path.join(uploadsDir, `${baseName}.mp3`);

  try {
    // Download audio with yt-dlp
    const command = `yt-dlp -x --audio-format mp3 -o "${outputPath}" "${youtubeUrl}"`;
    await new Promise((resolve, reject) => {
      exec(command, (err, stdout, stderr) => {
        if (err) {
          console.error(stderr);
          return reject(err);
        }
        resolve(stdout);
      });
    });

    // Transcribe using Whisper
    // Transcribe using Whisper and output in the same folder as the audio
    const whisperCmd = `whisper "${outputPath}" --model base --language English --output_format txt --output_dir "${uploadsDir}"`;
    await new Promise((resolve, reject) => {
      exec(whisperCmd, (err, stdout, stderr) => {
        if (err) {
          console.error(stderr);
          return reject(err);
        }
        resolve(stdout);
      });
    });

    // Read the generated transcription
    const transcriptPath = outputPath.replace(/\.mp3$/, '.txt');
    const transcript = fs.readFileSync(transcriptPath, 'utf-8');

    // Clean up
    fs.unlinkSync(outputPath);
    fs.unlinkSync(transcriptPath);

    res.json({ transcript });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Transcription failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
