import React, { useState, useEffect } from 'react';
import { Download, Monitor, Search, Sun, Moon, CheckCircle, ArrowRight, BookOpen, Music, Cpu, FileText } from 'lucide-react';

// DOWNLOADS PAGE (Supports multiple software suites)
export const Downloads = () => {
  const products = [
    {
      name: 'Sonar Viewer',
      version: 'v1.2.3',
      desc: 'High-performance bathymetric underwater echo parser and acoustic scanning software suite.',
      icon: <Monitor size={22} style={{ color: 'var(--teal)' }} />,
      platforms: [
        { name: 'Windows Installer', file: 'SonarViewer_Setup.exe', size: '47.6 MB', path: '/SonarViewer/SonarViewer_Setup.exe' },
        { name: 'macOS Bundle', file: 'sonarviewer-macos-app.zip', size: '36.0 MB', path: '/SonarViewer/sonarviewer-macos-app.zip' },
        { name: 'Linux Binaries', file: 'sonarviewer-linux-deb.zip', size: '76.2 MB', path: '/SonarViewer/sonarviewer-linux-deb.zip' }
      ],
      docId: 'install'
    },
    {
      name: 'AI Embedded Studio',
      version: 'v1.0.0',
      desc: 'Train, compile, and optimize deep neural network models to deploy directly onto edge microcontrollers.',
      icon: <Cpu size={22} style={{ color: 'var(--teal)' }} />,
      platforms: [
        { name: 'Windows Studio', file: 'AI_Embedded_Studio.exe', size: '10.1 MB', path: '/downloads/AI_Embedded_Studio.exe' }
      ],
      docId: 'ai-studio-intro'
    },
    {
      name: 'NfynDown',
      version: 'v1.0.0',
      desc: 'High-speed, parallel segmented utility client for downloading large firmware updates, map datasets, and media files.',
      icon: <FileText size={22} style={{ color: 'var(--teal)' }} />,
      platforms: [
        { name: 'Windows Downloader', file: 'NfynDown.exe', size: '54.2 MB', path: '/downloads/NfynDown.exe' }
      ],
      docId: 'nfyndown-intro'
    },
    {
      name: 'NfyniQ Music (Youtify)',
      version: 'v1.0.0',
      desc: 'Desktop audio player featuring 10-band equalizer, crossfade, gapless playback, synchronized lyrics, and offline mode.',
      icon: <Music size={22} style={{ color: 'var(--teal)' }} />,
      platforms: [
        { name: 'Windows Setup', file: 'NfyniQ_Music_Setup.exe', size: '34.6 MB', path: '/downloads/NfyniQ_Music_Setup.exe' }
      ],
      docId: 'youtify-manual'
    }
  ];

  return (
    <div className="page-container">
      <h2 className="page-title">Downloads Hub</h2>
      <p className="page-subtitle">Grab the latest compiled stable build releases of the NfyniQ software suites.</p>

      <div className="download-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '2rem auto 0' }}>
        {products.map((prod, index) => (
          <div key={index} className="glass download-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem', borderTop: '3px solid var(--teal)' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {prod.icon}
                  <h3 className="download-os-title" style={{ fontSize: '1.15rem', margin: 0 }}>{prod.name}</h3>
                </div>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', tracking: '0.05em' }}>v{prod.version}</span>
              </div>
              
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45', margin: '0.5rem 0 1rem' }}>{prod.desc}</p>
            </div>

            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1rem' }}>
                {prod.platforms.map((plat, pIdx) => (
                  <div key={pIdx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(15,23,42,0.03)', padding: '6px 10px', borderRadius: '6px' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-primary)' }}>
                      <Monitor size={11} style={{ color: 'var(--text-muted)' }} /> {plat.name}
                    </span>
                    <a 
                      href={plat.path}
                      download={plat.file}
                      className="download-btn" 
                      style={{ padding: '5px 10px', fontSize: '0.72rem', background: 'var(--teal)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      <Download size={9} /> Download ({plat.size})
                    </a>
                  </div>
                ))}
              </div>

              <button
                className="cta-button"
                style={{
                  width: '100%',
                  padding: '8px',
                  fontSize: '0.78rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  background: 'transparent',
                  border: '1px solid rgba(13, 148, 136, 0.25)',
                  color: 'var(--teal)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  margin: 0
                }}
                onClick={() => {
                  sessionStorage.setItem('active-doc-topic', prod.docId);
                  window.dispatchEvent(new CustomEvent('nav-to-tab', { detail: 'documentation' }));
                }}
              >
                <BookOpen size={12} /> View Manual & Docs
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// SERVICES & SOLUTIONS PAGE
export const Services = () => {
  const cards = [
    { title: 'Sub-Sea Pipeline & Seabed Surveys', desc: 'High-resolution bathymetric seabed mapping, tracing sub-surface infrastructure, cabling paths, and surveying pipelines using side-scan acoustic transducers.' },
    { title: 'Transducer Calibration & Tuning', desc: 'Precision frequency matching (20 kHz to 80 kHz), receiver gain adjustment, and analog-to-digital sensor voltage calibrations for custom hydrophones.' },
    { title: 'Embedded Marine Integrations', desc: 'Connecting transponders, echo sounders, and marine telemetry hardware directly to custom serial USB and TCP data links.' },
    { title: 'Acoustic Signal Processing', desc: 'Custom noise-cancellation filtering, thermocline wave adjustment, and biological cluster tracking algorithms configured specifically for your environment.' }
  ];

  return (
    <div className="page-container">
      <h2 className="page-title">Professional Services</h2>
      <p className="page-subtitle">Providing end-to-end hydro-acoustic calibrations, seabed surveying, and custom marine engineering.</p>
      
      <div className="solutions-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        {cards.map((card, index) => (
          <div key={index} className="glass solution-card" style={{ padding: '1.75rem', borderLeft: '4px solid var(--teal)' }}>
            <h3 className="solution-title" style={{ color: 'var(--teal)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>{card.title}</h3>
            <p className="solution-text" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="glass" style={{ marginTop: '3rem', padding: '2rem', textAlign: 'center', background: 'rgba(13, 148, 136, 0.03)', border: '1px solid rgba(13, 148, 136, 0.12)' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Need Custom Acoustic Engineering?</h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
          Our engineering team can deploy on-site to configure transducer arrays, integrate customized filters, and adapt Sonar Viewer for specific survey missions.
        </p>
        <button 
          className="cta-button" 
          style={{ margin: '0 auto', color: 'var(--teal)', borderColor: 'rgba(13,148,136,0.3)', background: 'rgba(13,148,136,0.08)', cursor: 'pointer' }} 
          onClick={() => {
            window.dispatchEvent(new CustomEvent('nav-to-tab', { detail: 'contact' }));
          }}
        >
          Initiate Integration Request
        </button>
      </div>
    </div>
  );
};

// MODERN DOCUMENTATION PAGE (Supports multiple software products)
export const Documentation = () => {
  const [search, setSearch] = useState('');
  const [activeTopic, setActiveTopic] = useState('install');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTopic = sessionStorage.getItem('active-doc-topic');
    if (savedTopic) {
      setActiveTopic(savedTopic);
      sessionStorage.removeItem('active-doc-topic');
    }
  }, []);

  const docTopics = [
    // Sonar Viewer
    { id: 'install', label: 'Core Installation', category: 'Sonar Viewer' },
    { id: 'transducer', label: 'Transducer Setup', category: 'Sonar Viewer' },
    { id: 'ping-api', label: 'Hydrophone Ping API', category: 'Sonar Viewer' },
    { id: 'filters', label: 'Acoustic Filters CLI', category: 'Sonar Viewer' },

    // AI Embedded Studio
    { id: 'ai-studio-intro', label: 'Studio Overview', category: 'AI Embedded Studio' },
    { id: 'ai-studio-quant', label: 'Model Quantization', category: 'AI Embedded Studio' },
    { id: 'ai-studio-deploy', label: 'Board Deployment', category: 'AI Embedded Studio' },

    // NfynDown
    { id: 'nfyndown-intro', label: 'Downloader Guide', category: 'NfynDown' },
    { id: 'nfyndown-pipeline', label: 'Parallel Pipelines', category: 'NfynDown' },

    // NfyniQ Music
    { id: 'youtify-manual', label: 'User Manual', category: 'NfyniQ Music' }
  ];

  const filteredTopics = docTopics.filter(t => 
    t.label.toLowerCase().includes(search.toLowerCase()) || 
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  const renderDocContent = () => {
    switch (activeTopic) {
      // --- Sonar Viewer ---
      case 'transducer':
        return (
          <>
            <h3 className="doc-section-title">Transducer Configuration</h3>
            <p>Connect your sub-sea transducer arrays to the receiver node via serial USB interfaces.</p>
            <pre className="doc-code-block">
              {`$ agy-sonar --device /dev/ttyUSB0 --baud 115200 --frequency 33khz`}
            </pre>
            <p style={{ marginTop: '1rem' }}>Verify sensor streams using the verification ping command:</p>
            <pre className="doc-code-block">
              {`$ agy-sonar --ping-test`}
            </pre>
          </>
        );
      case 'ping-api':
        return (
          <>
            <h3 className="doc-section-title">Hydrophone Ping API</h3>
            <p>The Sonar Viewer client exposes a local WebSocket server streaming transducer echo pulses in real-time.</p>
            <pre className="doc-code-block">
              {`const socket = new WebSocket('ws://localhost:8080/sonar');
socket.onmessage = (event) => {
  const ping = JSON.parse(event.data);
  console.log('Target Distance (m): ', ping.distance);
  console.log('Echo Intensity: ', ping.intensity);
};`}
            </pre>
          </>
        );
      case 'filters':
        return (
          <>
            <h3 className="doc-section-title">Acoustic Filters CLI</h3>
            <p>Apply noise filters to cancel out surface waves, marine thermoclines, and biological echoes.</p>
            <pre className="doc-code-block">
              {`$ agy-sonar --filter thermocline --gain 70
$ agy-sonar --clear-clutter --smooth 3`}
            </pre>
          </>
        );
      case 'install':
        return (
          <>
            <h3 className="doc-section-title">Core Installation</h3>
            <p>Configure the global NfyniQ Sonar CLI utility client to calibrate marine sensors and stream acoustics data.</p>
            <pre className="doc-code-block">
              {`$ npm install -g @nfyniq/sonar-cli
$ agy-sonar --help`}
            </pre>
          </>
        );

      // --- AI Embedded Studio ---
      case 'ai-studio-intro':
        return (
          <>
            <h3 className="doc-section-title">AI Embedded Studio Overview</h3>
            <p>AI Embedded Studio is a professional IDE designed to train, compile, and optimize deep neural network models (TFLite, ONNX) for deployment directly onto resource-constrained edge microcontrollers (Cortex-M, ESP32, STM32) and custom hardware accelerators.</p>
            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>Compile Model for Embedded Targets</h4>
            <pre className="doc-code-block">
              {`$ ai-studio compile --model model.tflite --target stm32f4 --optimize speed`}
            </pre>
          </>
        );
      case 'ai-studio-quant':
        return (
          <>
            <h3 className="doc-section-title">Model Quantization</h3>
            <p>Shrink your model footprint and improve inference speed on edge microcontrollers by quantizing weights from floating-point FP32 down to INT8 precision.</p>
            <pre className="doc-code-block">
              {`$ ai-studio quantize --input model.tflite --precision int8 --output model_quant.tflite`}
            </pre>
          </>
        );
      case 'ai-studio-deploy':
        return (
          <>
            <h3 className="doc-section-title">Microcontroller Deployment</h3>
            <p>Flash the optimized, compiled binary directly onto your connected edge board over COM/serial interface.</p>
            <pre className="doc-code-block">
              {`$ ai-studio deploy --binary build/model.bin --port COM3 --flash`}
            </pre>
          </>
        );

      // --- NfynDown ---
      case 'nfyndown-intro':
        return (
          <>
            <h3 className="doc-section-title">NfynDown Downloader Guide</h3>
            <p>NfynDown is a high-speed, parallel segmented utility client built to accelerate downloads for large firmware updates, bathymetry map datasets, and media files.</p>
            <pre className="doc-code-block">
              {`$ nfyndown --url https://firmware.nfyniq.com/firmware_v2.bin --threads 8`}
            </pre>
          </>
        );
      case 'nfyndown-pipeline':
        return (
          <>
            <h3 className="doc-section-title">Parallel Pipelines</h3>
            <p>Fine-tune download pipelines by tweaking thread count, chunk segment sizes, and retry limits for low-bandwidth environments.</p>
            <pre className="doc-code-block">
              {`$ nfyndown --url https://data.niot.res.in/bathymetry.db --threads 16 --chunk-size 4M --retries 5`}
            </pre>
          </>
        );

      // --- NfyniQ Music (Youtify) ---
      case 'youtify-manual':
        return (
          <>
            <h3 className="doc-section-title">NfyniQ Music Streaming Software — User Manual</h3>
            <p>Welcome to <strong>NfyniQ</strong>, your high-performance, futuristic music streaming application designed for rich sound quality, real-time synchronized lyrics, smart recommendations, and full audio customization.</p>
            
            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>1. Getting Started & First-Time Setup</h4>
            <p>When you open <strong>NfyniQ</strong> for the first time, you will be guided through a quick 2-step setup:</p>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li><strong>Select Music Languages:</strong> Tap one or more language chips (e.g., <em>Tamil, English, Hindi, Telugu, Malayalam, Punjabi, Korean, Spanish</em>). Your Home screen and recommendations will automatically tailor themselves to your chosen languages!</li>
              <li><strong>Choose a Username:</strong> Type your desired username and tap <strong>"Get Started"</strong> to enter the app.</li>
            </ol>
            <div style={{ borderLeft: '4px solid var(--teal)', background: 'rgba(13,148,136,0.04)', padding: '10px 15px', borderRadius: '4px', fontStyle: 'italic', marginBottom: '1rem' }}>
              <strong>TIP:</strong> You can update your language preferences or change your username anytime by tapping the <strong>Settings (⚙️)</strong> icon in the top right corner of the Home screen.
            </div>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>2. Main Navigation</h4>
            <p>NfyniQ features 3 primary navigation sections accessible from the bottom bar (on mobile/tablets) or sidebar (on laptops/desktops):</p>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li><strong>🏠 Home:</strong> Your personalized hub with Quick Play tracks, language-based Top Artists & Composers, and tailored song recommendations.</li>
              <li><strong>🔍 Search:</strong> Instant search engine with live suggestions and your <strong>Recently Played</strong> listening history.</li>
              <li><strong>📚 Library:</strong> Your music collection, including <strong>Favorites</strong>, custom playlists, and <strong>Downloaded Tracks</strong> for offline playback.</li>
            </ul>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>3. Music Playback & Now Playing Screen</h4>
            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>3.1 Mini Player (Bottom Bar)</h5>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li><strong>Play / Pause:</strong> Tap the center Play/Pause icon.</li>
              <li><strong>Like (♥):</strong> Tap the heart icon to immediately add or remove the song from your <strong>Favorites</strong>.</li>
              <li><strong>Open Fullscreen:</strong> Tap anywhere on the track title or album cover to expand the <strong>Fullscreen Player</strong>.</li>
            </ul>

            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>3.2 Fullscreen Player Controls</h5>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li><strong>Scrubbing Slider:</strong> Drag the progress slider to jump to any point in the track.</li>
              <li><strong>Previous / Next:</strong> Tap <strong>⏮</strong> to restart or go to the previous song; tap <strong>⏭</strong> to skip to the next track.</li>
              <li><strong>🔀 Shuffle Queue (Top-Left Button):</strong> Randomizes the order of songs in your current queue.</li>
              <li><strong>🔁 Repeat Track (Top-Right Button):</strong> Continuously repeats the current song.</li>
              <li><strong>🎚️ Equalizer & FX (Bottom-Left Button):</strong> Opens the 10-band Equalizer and Bass Boost panel.</li>
              <li><strong>≡ Up Next Queue (Bottom-Right Button):</strong> Opens a sheet showing upcoming queued songs. Tap any song to jump straight to it.</li>
              <li><strong>⋮ More Options:</strong> Opens the song options menu (Add to Playlist, Download, View Artist, etc.).</li>
            </ul>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>4. 🎤 Live Synchronized Lyrics (Karaoke Mode)</h4>
            <p>Sing along with real-time lyrics that scroll in sync with the song:</p>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Open the <strong>Fullscreen Player</strong>.</li>
              <li>Tap the <strong>Microphone (🎤)</strong> icon in the top-right header.</li>
              <li>The album art will smoothly transition to <strong>Karaoke Mode</strong>:
                <ul style={{ paddingLeft: '1.25rem', marginTop: '0.25rem' }}>
                  <li>The current singing line glows in <strong>vibrant orange</strong> with larger text.</li>
                  <li>The lyrics view auto-scrolls to keep the singing line centered.</li>
                </ul>
              </li>
              <li><strong>Tap-to-Seek:</strong> Tap <em>any</em> lyric line in the list to jump playback directly to that exact second of the song!</li>
              <li>Tap the <strong>🎤</strong> icon again to switch back to the Album Cover view.</li>
            </ol>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>5. 🎚️ 10-Band Graphic Equalizer & Bass Boost</h4>
            <p>Customize your sound profile to match your headphones or speakers:</p>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Open <strong>Equalizer</strong> via the <strong>(⚙️) Settings</strong> menu on Home or the <strong>(🎚️)</strong> icon on the Fullscreen Player.</li>
              <li><strong>Master Switch:</strong> Toggle the Equalizer ON or OFF in the top right.</li>
              <li><strong>Sound Presets:</strong> Choose from 7 built-in presets: <em>Flat, Bass Booster, Vocal Boost, Rock, Pop, Jazz, Electronic</em>.</li>
              <li><strong>Bass Boost & 3D Virtualizer:</strong> Adjust the rotary sliders to add deep punchy bass and spatial 3D surround sound.</li>
              <li><strong>10-Band Sliders:</strong> Scroll horizontally across the 10 frequency bands (<em>31Hz, 62Hz, 125Hz, 250Hz, 500Hz, 1kHz, 2kHz, 4kHz, 8kHz, 16kHz</em>) to fine-tune each frequency level from <strong>-10 dB to +10 dB</strong>.</li>
            </ol>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>6. 🎛️ Audio Crossfade & Gapless Playback</h4>
            <p>Enjoy DJ-style smooth transitions between tracks:</p>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Open <strong>(⚙️) Settings</strong> on the Home screen.</li>
              <li>Tap <strong>"Audio Crossfade"</strong>.</li>
              <li><strong>Crossfade Duration:</strong> Drag the slider from <strong>1.0s to 12.0s</strong> (default is 4.0s). The ending track will smoothly fade out while the next track blends in!</li>
              <li><strong>Gapless Playback:</strong> Toggle Gapless Playback ON to eliminate pauses between continuous live concert or concept album tracks.</li>
            </ol>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>7. 📁 Playlist Management System</h4>
            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>7.1 ❤️ Favorites Playlist</h5>
            <p>Built-in permanent playlist that automatically collects every song you tap <strong>Like (♥)</strong> on. It cannot be accidentally deleted.</p>
            
            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>7.2 ➕ Creating Custom Playlists</h5>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Go to the <strong>📚 Library</strong> tab.</li>
              <li>Tap the <strong>➕ (Add)</strong> button in the top header.</li>
              <li>Enter a Playlist Name (e.g., <em>Workout Energy, Late Night Chill, Tamil Hits</em>) and optional description.</li>
              <li>Tap <strong>"Create"</strong>.</li>
            </ol>

            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>7.3 Adding Songs to Playlists</h5>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Tap the <strong>⋮ (Three Dots)</strong> menu on any track anywhere in the app.</li>
              <li>Select <strong>"Add to Playlist"</strong> and pick the target playlist (or create a new one on the spot!).</li>
            </ul>

            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>7.4 Managing Playlists</h5>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Open any playlist in your Library to <strong>Play All</strong>, <strong>Shuffle Play</strong>, or use the in-playlist <strong>Search Bar</strong> to filter songs.</li>
              <li>Custom playlists can be renamed or deleted via the top-right menu.</li>
            </ul>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>8. 📥 Offline Music Downloads</h4>
            <p>Listen to your favorite songs without an internet connection:</p>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Tap the <strong>⋮ (Three Dots)</strong> menu on any song.</li>
              <li>Tap <strong>"Download Track"</strong>.</li>
              <li>The track will be downloaded directly to your device storage.</li>
              <li>Go to <strong>📚 Library</strong> and tap <strong>"Downloaded Tracks"</strong> to view and play all your offline music!</li>
            </ol>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>9. 😴 Sleep Timer & Listening Insights</h4>
            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>9.1 Sleep Timer</h5>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Open <strong>(⚙️) Settings</strong> on the Home screen.</li>
              <li>Tap <strong>"Sleep Timer"</strong>.</li>
              <li>Select your desired duration: <em>15 Minutes, 30 Minutes, 45 Minutes, 60 Minutes, or End of Track</em>.</li>
              <li>Music will smoothly stop when the timer finishes!</li>
            </ol>

            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>9.2 Listening Insights (NfyniQ Wrapped)</h5>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Open <strong>(⚙️) Settings</strong> on the Home screen.</li>
              <li>Tap <strong>"Listening Insights"</strong>.</li>
              <li>View your personalized music dashboard: Total Minutes Listened, Top 5 Most Played Artists, and Top 5 Most Played Songs.</li>
            </ol>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>10. 👤 Artist Profile Pages</h4>
            <p>Explore all popular hits from your favorite composers and singers:</p>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>On the <strong>Home screen</strong>, scroll horizontally through the <strong>"Top Artists & Composers"</strong> cards (customized to your languages like <em>Anirudh, A. R. Rahman, Taylor Swift, Arijit Singh</em>, etc.).</li>
              <li>Tap any artist card to open their <strong>Artist Profile Page</strong>.</li>
              <li>View verified artist badge, tap <strong>Follow</strong>, and stream their top hit songs!</li>
            </ul>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>11. 💡 Pro Tips & Shortcuts</h4>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li><strong>Background Audio:</strong> NfyniQ continues streaming music when minimized or when working in other desktop applications.</li>
              <li><strong>Adaptive Ambient Glow:</strong> The player screen background and mini-player progress bar automatically change colors to match the mood and cover art of the current song!</li>
              <li><strong>Auto Recommendations:</strong> When your current queue finishes, NfyniQ automatically recommends and queues similar tracks based on artist, language, and genre so the music never stops.</li>
            </ul>
          </>
        );
      default:
        return (
          <>
            <h3 className="doc-section-title">Core Installation</h3>
            <p>Configure the global NfyniQ Sonar CLI utility client to calibrate marine sensors and stream acoustics data.</p>
            <pre className="doc-code-block">
              {`$ npm install -g @nfyniq/sonar-cli
$ agy-sonar --help`}
            </pre>
          </>
        );
    }
  };

  const docThemeStyle = darkMode
    ? {
        background: '#090d16',
        color: '#f8fafc',
        '--border-muted': 'rgba(255,255,255,0.08)',
        '--text-primary': '#f8fafc',
        '--text-secondary': '#94a3b8',
        '--bg-tertiary': '#0d1527',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)'
      }
    : {
        background: '#ffffff',
        color: '#0f172a',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(15, 23, 42, 0.06)'
      };

  const categories = [...new Set(docTopics.map(t => t.category))];

  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h2 className="page-title" style={{ marginBottom: '0.25rem' }}>Documentation Deck</h2>
          <p className="showcase-tagline" style={{ margin: 0 }}>Logbooks, manuals, and command references for NfyniQ suites.</p>
        </div>
        
        <button 
          className="back-button" 
          onClick={() => setDarkMode(!darkMode)}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', background: darkMode ? '#1e293b' : '#ffffff', color: darkMode ? '#ffffff' : 'var(--text-primary)' }}
        >
          {darkMode ? <Sun size={14} style={{ stroke: '#fbbf24' }} /> : <Moon size={14} />}
          <span>{darkMode ? 'Light Docs' : 'Dark Docs'}</span>
        </button>
      </div>

      <div style={docThemeStyle}>
        <div className="doc-layout" style={{ gridTemplateColumns: '260px 1fr', gap: 0 }}>
          
          {/* Sidebar */}
          <div 
            className="doc-sidebar" 
            style={{ 
              borderRight: '1px solid var(--border-muted, rgba(15,23,42,0.06))', 
              padding: '1.5rem', 
              background: darkMode ? '#0e172a' : '#f8fafc',
              height: '100%',
              minHeight: '560px'
            }}
          >
            <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
              <Search size={14} style={{ position: 'absolute', left: '10px', top: '10px', color: 'var(--text-muted)' }} />
              <input
                type="text"
                className="contact-input"
                style={{ 
                  width: '100%', 
                  paddingLeft: '2rem', 
                  paddingTop: '6px', 
                  paddingBottom: '6px', 
                  fontSize: '0.8rem',
                  background: darkMode ? '#1e293b' : '#ffffff',
                  color: darkMode ? '#ffffff' : '#0f172a',
                  border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)'
                }}
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {categories.map(cat => {
              const topics = filteredTopics.filter(t => t.category === cat);
              if (topics.length === 0) return null;
              return (
                <div key={cat} style={{ marginBottom: '1.25rem' }}>
                  <span className="doc-sidebar-title" style={{ fontSize: '0.68rem', letterSpacing: '0.05em', display: 'block', marginBottom: '0.4rem', color: darkMode ? '#64748b' : '#94a3b8' }}>
                    {cat.toUpperCase()}
                  </span>
                  {topics.map(topic => (
                    <span
                      key={topic.id}
                      className={`doc-sidebar-link ${activeTopic === topic.id ? 'active' : ''}`}
                      style={{ 
                        fontSize: '0.84rem', 
                        color: activeTopic === topic.id ? 'var(--teal)' : (darkMode ? '#94a3b8' : 'var(--text-secondary)'),
                        background: activeTopic === topic.id ? 'rgba(13, 148, 136, 0.08)' : 'transparent',
                        display: 'block',
                        padding: '6px 10px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        marginBottom: '2px',
                        transition: 'all 0.15s'
                      }}
                      onClick={() => setActiveTopic(topic.id)}
                    >
                      {topic.label}
                    </span>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Content */}
          <div className="doc-content" style={{ padding: '2rem', background: darkMode ? '#090d16' : '#ffffff', minHeight: '560px', overflowY: 'auto' }}>
            <div style={{ color: darkMode ? '#cbd5e1' : 'var(--text-primary)' }}>
              {renderDocContent()}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// SHOWCASE PAGE (Sonar Viewer installations)
export const Showcase = () => {
  const studies = [
    { client: 'Pacific Marine Lab', task: 'Mapped deep ocean trenches down to 1000m using calibrated transducer sonar viewer pings.' },
    { client: 'Oceanic Research Inst', task: 'Filtered out biological wave noise to identify historical shipwreck contours.' },
    { client: 'GeoSurvey Group', task: 'Traced sub-sea telemetry cabling paths with real-time echo-intensity graphs.' }
  ];

  return (
    <div className="page-container">
      <h2 className="page-title">Showcase Gallery</h2>
      <p className="page-subtitle">Explore deployed applications of the NfyniQ Sonar Viewer platform.</p>
      
      <div className="solutions-grid">
        {studies.map((item, index) => (
          <div key={index} className="glass solution-card" style={{ borderLeft: '4px solid var(--teal)', padding: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--teal)' }}>{item.client}</span>
            <p className="solution-text" style={{ marginTop: '0.5rem' }}>{item.task}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// BLOG PAGE
export const Blog = () => {
  const posts = [
    { title: 'Calibrating Sub-Sea Sonar Arrays in Real-Time', date: 'July 14, 2026', author: 'NfyniQ Marine Team', excerpt: 'Acoustic scanning grids require noise-cancellation filtering to separate marine biology echoes from wreckage outlines.' },
    { title: 'Filtering Marine Thermoclines in Hydrophone Feeds', date: 'June 30, 2026', author: 'Sonar Labs', excerpt: 'How sudden changes in water temperature distort sound velocity parameters and how to calibrate software filters.' }
  ];

  return (
    <div className="page-container">
      <h2 className="page-title">Marine Tech Blog</h2>
      <p className="page-subtitle">Tech reports and releases from our marine acoustics desk.</p>
      
      <div className="blog-grid">
        {posts.map((post, index) => (
          <div key={index} className="glass blog-card">
            <div className="blog-meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <span className="blog-readmore" style={{ color: 'var(--teal)' }}>Read full report <ArrowRight size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /></span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ABOUT PAGE (Acoustic Chronology Timeline)
export const About = () => {
  const timeline = [
    { year: '2025', title: 'Started NfyniQ', desc: 'Formulated acoustic sensor software logic close to edge hardware.' },
    { year: '2025', title: 'Sonar Transducer Calibration', desc: 'Built the first digital noise filters to parse voltage returns into spatial mappings.' },
    { year: '2026', title: 'Sonar Viewer Launch', desc: 'Completed the circular scan scope engine rendering targets dynamically on Windows, macOS, and Linux.' },
    { year: '2026 & Beyond', title: 'Future Acoustic Roadmap', desc: 'Expanding to multi-hydrophone array correlations, deep trench mappings, and sub-sea communications.' }
  ];

  return (
    <div className="page-container">
      <h2 className="page-title">About NfyniQ</h2>
      <p className="page-subtitle">Engineering high-performance software systems designed for extreme physical environments and acoustic sensors.</p>

      <div className="glass" style={{ padding: '3rem 2rem', position: 'relative' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.4rem', marginBottom: '2.5rem', textAlign: 'center' }}>
          Our Sonar Development Chronology
        </h3>

        <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
          <div 
            style={{ 
              position: 'absolute', 
              left: '20px', 
              top: '10px', 
              bottom: '10px', 
              width: '2px', 
              background: 'linear-gradient(180deg, var(--teal) 0%, var(--cyan) 100%)' 
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {timeline.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '1.5rem', position: 'relative', alignItems: 'flex-start' }}>
                <div 
                  style={{ 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    background: '#ffffff', 
                    border: '3px solid var(--teal)', 
                    position: 'absolute', 
                    left: '15px', 
                    top: '6px', 
                    zIndex: 2,
                    boxShadow: '0 0 8px rgba(13,148,136,0.3)'
                  }} 
                />

                <div style={{ paddingLeft: '2.5rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.85rem', 
                        fontWeight: '700', 
                        background: 'rgba(13,148,136,0.06)', 
                        color: 'var(--teal)',
                        padding: '2px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      {step.year}
                    </span>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>{step.title}</h4>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>{step.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
