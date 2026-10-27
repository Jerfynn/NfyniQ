import aiStudioMain from '../assets/products/ai_studio_main.webp';
import nfyndownMain from '../assets/products/nfyndown_main.webp';
import nfyndownSettings from '../assets/products/nfyndown_settings.webp';
import nfyndownSplash from '../assets/products/nfyndown_splash.webp';
import musicMain from '../assets/products/music_main.webp';
import musicSearch from '../assets/products/music_search.webp';
import musicSetup from '../assets/products/music_setup.webp';
import sonarRadar from '../assets/products/sonar_radar.webp';
import sonarDashboard from '../assets/products/sonar_dashboard.webp';

import chatIcon from '../assets/products/icon_chat.png';
import chatDesktop22 from '../assets/products/chat_v22_desktop.webp';
import chatPhones22 from '../assets/products/chat_v22_phones.webp';
import chatScreenShare22 from '../assets/products/chat_v22_screen_share.webp';
import chatUrgent22 from '../assets/products/chat_v22_urgent_alert.webp';
import reminderDashboard from '../assets/products/reminder_dashboard.webp';
import reminderCompanions from '../assets/products/reminder_companions.webp';
import reminderIcon from '../assets/products/icon_reminder.png';

const RELEASES = 'https://github.com/Jerfynn/NfyniQ/releases/download';

export const productsData = [
  {
    id: 'nfyniq-chat',
    name: 'NfyniQ Chat',
    isNew: true,
    icon: chatIcon,
    accent: '#6C5CFA',
    tagline: 'Offline Office Messenger for Windows & Android',
    shortDesc: 'Encrypted chat, file sharing and screen sharing over your own Wi-Fi — now with an Android app. No internet, no accounts, nothing uploaded to a server.',
    keyCapability: 'End-to-end encrypted messaging between PCs, linked phones that share your PC chats, screen sharing and full-screen urgent alerts.',
    category: 'Local Network Communication',
    version: 'v2.2.0',
    badge: 'Now on Android',
    image: chatDesktop22,
    gallery: [chatDesktop22, chatPhones22, chatScreenShare22, chatUrgent22],
    overview: 'NfyniQ Chat is a messenger for teams that share a network. Everyone who opens it on the same Wi-Fi or LAN shows up automatically, and messages, files and screens travel straight between devices — it works with the internet switched off and nothing ever leaves the building. Version 2.2 adds end-to-end encryption between computers, screen sharing, urgent full-screen alerts, groups and voice messages, plus phones: link your own phone to use the same chats as your PC, or invite someone without a computer to join from theirs.',
    features: [
      'End-to-end encrypted messages between computers (X25519 key exchange, AES-256-GCM)',
      'Android app: link your phone to your PC with a QR code or 6-digit code — same chats, kept in sync',
      'Invite people without a computer to join from their phone as themselves',
      'Screen sharing: show your screen to a colleague with one click, full-screen on their side',
      'Urgent alerts that take over the recipient’s screen until they tap Got it',
      'Groups, voice messages, reactions, pinned and edited messages',
      'Send files and whole folders of any size; paste screenshots with Ctrl+V',
      'Search chats and messages, code formatting, light and dark themes'
    ],
    applications: [
      'Workshops and labs passing logs, CAD files and photos between PCs and phones',
      'Test bays and field sites that need instant alerts with no internet',
      'Showing a colleague your screen across the office without a meeting link',
      'Air-gapped or privacy-sensitive networks where data must stay local'
    ],
    techSpecs: {
      'Encryption': 'X25519 + AES-256-GCM between computers',
      'Discovery': 'UDP broadcast beacon on port 41234',
      'Messages & Files': 'Direct TCP connections (port 50505)',
      'Phone Link': 'Wi-Fi connection to a PC running NfyniQ Chat (port 50600)',
      'Internet Required': 'No — works entirely on the local network',
      'Supported OS': 'Windows 10/11 (x64), Android 5.1+'
    },
    downloads: [
      { name: 'Windows Installer (.exe)', file: 'NfyniQ-Chat-Setup-2.2.0.exe', size: '78.2 MB', path: `${RELEASES}/chat-v2.2.0/NfyniQ-Chat-Setup-2.2.0.exe`, sha256: '13b16981b37daa37ffc1d359a5fc75376e1e8936956a6090578f61c81601a044' },
      { name: 'Android App (.apk)', file: 'NfyniQ-Chat-2.2.0.apk', size: '3.9 MB', path: `${RELEASES}/chat-v2.2.0/NfyniQ-Chat-2.2.0.apk`, sha256: '4d0525970362fe4e95cf48c4a30162389d5264dfec3fb32d4dfa1cb7e874b129' }
    ],
    dlTags: ['Windows 10/11 x64', 'Android 5.1+', 'Works Offline'],
    releaseNotes: [
      'New Android app — link your phone to your PC, or invite someone who has no computer',
      'End-to-end encryption between computers',
      'Screen sharing and full-screen urgent alerts',
      'Groups, voice messages, reactions, pins, edits and folder sharing'
    ],
    docId: 'nfyniq-chat-manual'
  },
  {
    id: 'smart-reminder',
    name: 'Smart Reminder Assistant',
    isNew: true,
    icon: reminderIcon,
    accent: '#FF4B5C',
    tagline: 'Natural-Language Reminders with Animated Companions',
    shortDesc: 'Type a reminder the way you would say it. When it is due, an animated companion drops down on a silk thread to tell you.',
    keyCapability: 'Plain-English scheduling ("every 30 mins: eye break"), on-screen companions with Done and Snooze, and quiet tray operation.',
    category: 'Productivity & Wellbeing',
    version: 'v1.2.0',
    badge: 'New Release',
    image: reminderDashboard,
    gallery: [reminderDashboard, reminderCompanions],
    overview: 'Smart Reminder Assistant turns a quick sentence into a reminder. Type "stretch in 45 min", "standup at 4:30 pm" or "every 30 mins: eye break" and it understands the time, the category and whether it repeats. When a reminder is due, one of four animated companions drops in on a silk thread with Done and Snooze buttons. It lives in the system tray, can start quietly with Windows, and keeps running when you close the window.',
    features: [
      'Natural-language input: "in 45 min", "at 4:30 pm", "tomorrow at 11am", "every 30 mins"',
      'Four animated companions — Sparky, Mochi, Weaver and Dash — each with its own entrance',
      'Done, Snooze 5 min and Snooze 15 min right on the pop-up',
      'Choose the corner, the size and how the companion arrives',
      'Runs in the system tray, starts with Windows, optional sounds',
      'Global shortcut Ctrl+Shift+R to add a reminder from anywhere'
    ],
    applications: [
      'Healthy work habits: water, eye rest and stretch breaks',
      'Meetings, stand-ups and calls during a busy day',
      'Focus sprints and recurring routines',
      'Anyone who ignores ordinary notification toasts'
    ],
    techSpecs: {
      'Architecture': 'Electron desktop application',
      'Time Parsing': 'Natural-language date engine (chrono)',
      'Background Mode': 'System tray with optional start at sign-in',
      'Shortcut': 'Ctrl+Shift+R global hotkey',
      'Supported OS': 'Windows 10/11 (x64)'
    },
    downloads: [
      { name: 'Windows Installer (.exe)', file: 'Smart-Reminder-Assistant-Setup-1.2.0.exe', size: '105.7 MB', path: `${RELEASES}/reminder-v1.2.0/Smart-Reminder-Assistant-Setup-1.2.0.exe`, sha256: '48d3a69b4683db607521f2905718829b3a999d6e44048fdca85b6ac309a4dbdd' }
    ],
    dlTags: ['Windows 10/11 x64', 'Installer', 'Runs in Tray'],
    releaseNotes: [
      'Four companions with their own entrances and celebrations',
      'Repeating reminders such as "every 30 mins: eye break"',
      'Choose companion size, corner and arrival style',
      'Ctrl+Shift+R global shortcut and start-at-sign-in option'
    ],
    docId: 'smart-reminder-manual'
  },
  {
    id: 'sonar-viewer',
    name: 'Sonar Viewer',
    tagline: 'Hydro-Acoustic Scanning & Bathymetric Imaging Suite',
    shortDesc: 'Professional 360° underwater acoustic visualizer, bathymetric seabed mapping, and real-time transducer tracking software.',
    keyCapability: 'Real-time 360° hydro-acoustic echo capture with dynamic noise filters and multi-device telemetry.',
    category: 'Marine & Acoustic Systems',
    version: 'v1.2.3',
    badge: 'Marine Grade',
    image: sonarRadar,
    gallery: [sonarRadar, sonarDashboard],
    overview: 'Sonar Viewer is an advanced bathymetric and acoustic scanning workstation engineered for hydro-acoustic sensors, sub-sea mapping arrays, and marine research vessels. It processes real-time transducer pulse telemetry over serial and TCP/IP interfaces, rendering high-precision 360° polar radar scans with configurable sector sweeps, receiver gain curves, and digital thermocline noise-cancellation filters.',
    features: [
      'Circular 360° hydro-acoustic polar sweep visualizer with configurable sector limits',
      'Real-time receiver gain calibration and variable range scale adjustments (10m to 1000m)',
      'Multi-device discovery dashboard with IP/Port manual connections and live replay',
      'Digital thermocline and sea-surface clutter cancellation filter pipelines',
      'Acoustic echo intensity heatmaps and screenshot / data logging utilities',
      'High-throughput WebSocket ping streaming server for third-party integrations'
    ],
    applications: [
      'Sub-sea pipeline inspections and underwater cabling path surveys',
      'Bathymetric seabed topography mapping and obstacle avoidance',
      'Hydrophone array sensor calibration and acoustic telemetry monitoring',
      'Autonomous Underwater Vehicle (AUV) & ROV navigation support'
    ],
    techSpecs: {
      'Architecture': 'Cross-Platform Native Desktop (C++ / React / Electron)',
      'Sensor Protocols': 'Serial USB (RS-232/485), TCP/IP Socket, NMEA 0183',
      'Scan Frequency': '20 kHz – 120 kHz Tunable Hydrophone Bandwidth',
      'Supported OS': 'Windows 10/11 (x64), macOS 12+ (Apple Silicon/Intel), Linux Debian/Ubuntu',
      'Memory Footprint': 'Minimal runtime overhead (< 180 MB RAM)'
    },
    downloads: [
      { name: 'Windows Setup (.exe)', file: 'SonarViewer_Setup.exe', size: '47.6 MB', path: 'https://github.com/Jerfynn/NfyniQ/releases/download/v1.0.0/SonarViewer_Setup.exe' },
      { name: 'macOS App (.zip)', file: 'sonarviewer-macos-app.zip', size: '36.0 MB', path: 'https://github.com/Jerfynn/NfyniQ/releases/download/v1.0.0/sonarviewer-macos-app.zip' },
      { name: 'Linux Deb (.zip)', file: 'sonarviewer-linux-deb.zip', size: '76.2 MB', path: 'https://github.com/Jerfynn/NfyniQ/releases/download/v1.0.0/sonarviewer-linux-deb.zip' }
    ],
    releaseNotes: [
      '360° hydro-acoustic polar swept PPI radar visualization',
      'Dynamic receiver gain curve calibration and range scale adjustments (10m - 1000m)',
      'High-throughput WebSocket ping telemetry streaming for AUV & ROV integration',
      'Signed standalone installer builds for Windows, macOS, and Linux'
    ],
    dlTags: ['Windows', 'macOS', 'Linux'],
    docId: 'sonar-manual'
  },
  {
    id: 'ai-embedded-studio',
    name: 'AI Embedded Studio',
    tagline: 'Embedded Firmware & Edge AI Development IDE',
    shortDesc: 'Complete development studio for training, compiling, and deploying neural network models and firmware directly to edge microcontrollers.',
    keyCapability: 'Integrated code editor, hardware abstraction layers, and INT8 model quantization for MCU deployment.',
    category: 'Embedded & Edge AI',
    version: 'v1.0.0',
    badge: 'Standalone IDE',
    image: aiStudioMain,
    gallery: [aiStudioMain],
    overview: 'AI Embedded Studio is a purpose-built integrated engineering environment designed to bridge high-level machine learning models with low-level embedded hardware. Featuring a dedicated code workspace, device tree explorer, and compiler integrations for ARM Cortex-M, STM32, ESP32, and custom MCU boards, it empowers engineers to quantize models, manage sensor libraries, and flash target boards seamlessly.',
    features: [
      'Integrated C/C++/Arduino firmware editor with multi-file project workspace tree',
      'Automatic hardware I2C/SPI peripheral scanners and sensor address discovery tools',
      'Neural network quantization engine (FP32 to INT8/INT4) optimized for microcontrollers',
      'Direct COM/Serial port flashing and real-time interactive terminal monitor',
      'Embedded library manager for AUV thrusters, magnetic sensors, barometers, and relays',
      'Custom hardware code generator producing zero-dependency C++ inference runtimes'
    ],
    applications: [
      'Edge AI inferencing for smart sensors and anomaly detection',
      'Firmware development for Autonomous Underwater Vehicles (AUVs) and robotic thrusters',
      'Industrial IoT sensor nodes and predictive maintenance units',
      'Embedded microcontroller prototyping on STM32, ESP32, Teensy, and Arduino'
    ],
    techSpecs: {
      'Runtime Engine': 'Standalone Self-Contained Desktop Application (PyInstaller / Python / C++)',
      'Supported Targets': 'ARM Cortex-M (M0/M3/M4/M7), ESP32, STM32 Series, Teensy, AVR',
      'Communication': 'USB-UART / Serial COM at up to 921600 baud, SWD/JTAG',
      'Model Formats': 'TFLite Micro, ONNX Runtime Edge, C Array Header Exporter',
      'Supported OS': 'Windows 10/11 (x64 Standalone Executable)'
    },
    downloads: [
      { name: 'Windows Standalone Executable (.exe)', file: 'AI_Embedded_Studio.exe', size: '10.1 MB', path: 'https://github.com/Jerfynn/NfyniQ/releases/download/v1.0.0/AI_Embedded_Studio.exe' }
    ],
    releaseNotes: [
      'Integrated C/C++ MCU code workspace with multi-file project tree',
      'Neural network quantization engine (FP32 to INT8/INT4) for microcontrollers',
      'Automatic I2C/SPI peripheral sensor address discovery',
      'Zero-dependency standalone Windows executable release'
    ],
    dlTags: ['Windows 10/11 x64', 'Portable .exe', 'No Install'],
    docId: 'ai-studio-intro'
  },
  {
    id: 'nfyndown',
    name: 'NfynDown',
    tagline: 'High-Speed Parallel Media & Stream Downloader',
    shortDesc: 'Premium parallel segmented downloader with multi-threaded chunk pipelines, cookie session bypass, and batch queue managers.',
    keyCapability: 'Segmented multi-thread acceleration with automatic FFmpeg post-processing and cookie authentication.',
    category: 'Desktop Utility Software',
    version: 'v1.0.0',
    badge: 'Hardware Accelerated',
    image: nfyndownMain,
    gallery: [nfyndownMain, nfyndownSettings, nfyndownSplash],
    overview: 'NfynDown is a high-performance, multi-threaded download client crafted to handle large dataset transfers, media streams, and firmware bundles. Built with an intuitive dark aesthetic, it features single-link analyzers, batch job queues, dynamic theme switchers, browser cookie extraction for protected endpoints, and integrated FFmpeg transcoding pipelines.',
    features: [
      'High-throughput segmented multi-threaded download engine with auto-reconnect',
      'Single link fast analysis alongside batch processing queue management',
      'Cookie authentication scanner supporting Chrome, Edge, and Firefox browser sessions',
      'Built-in FFmpeg core integration for automatic high-definition audio/video merging',
      'Customizable theme engine (Violet Glow, Cyberpunk Orange, Emerald Neon, Deep Blue)',
      'Detailed download history tracker with search and file path launcher'
    ],
    applications: [
      'High-speed retrieval of large firmware images and remote dataset packages',
      'Batch downloading of video, audio, and multimedia streams across platforms',
      'Automated background media processing and format standardization',
      'Low-bandwidth resilient downloading with aggressive chunk-level resume'
    ],
    techSpecs: {
      'Transcoding Engine': 'FFmpeg Core with MP4/MKV/MP3/FLAC encoding pipelines',
      'Network Protocols': 'HTTP/HTTPS, HLS (m3u8), DASH, WebSocket segments',
      'Supported OS': 'Windows 10/11 (x64 Standalone Executable)',
      'Installation': 'No dependencies needed — ready to run out of the box'
    },
    downloads: [
      { name: 'Windows Standalone Executable (.exe)', file: 'NfynDown.exe', size: '54.2 MB', path: 'https://github.com/Jerfynn/NfyniQ/releases/download/v1.0.0/NfynDown.exe' }
    ],
    releaseNotes: [
      'Multi-threaded async segmented chunk download engine',
      'Automated FFmpeg high-definition audio and video muxing',
      'Integrated browser session cookie decryption support (Chrome/Edge/Firefox)',
      'Standalone portable Windows binary with zero external dependencies'
    ],
    dlTags: ['Windows 10/11 x64', 'Portable .exe', 'No Install'],
    docId: 'nfyndown-manual'
  },
  {
    id: 'nfyniq-music',
    name: 'NfyniQ Music',
    tagline: 'Futuristic Hi-Fi Audio Streaming & Player',
    shortDesc: 'Desktop audio player featuring real-time synchronized karaoke lyrics, 10-band graphic equalizer, gapless crossfade, and offline playback.',
    keyCapability: '10-band graphic EQ, seamless DJ crossfade, real-time tap-to-seek lyrics, and intelligent music recommendations.',
    category: 'Audio & Media Streaming',
    version: 'v1.0.0',
    badge: 'Desktop Audio Suite',
    image: musicMain,
    gallery: [musicMain, musicSearch, musicSetup],
    overview: 'NfyniQ Music (Youtify) is a modern desktop streaming application engineered with high-fidelity audio processing, personalized multilingual recommendations, and an ambient player interface. Featuring real-time synced lyrics that follow playback line-by-line, a 10-band hardware-calibrated equalizer, bass boost, gapless playback, and offline downloads, it delivers an uncompromising listening experience.',
    features: [
      'Live synchronized karaoke lyrics with active line glow and tap-to-seek playback',
      '10-Band Graphic Equalizer with 7 presets, rotary Bass Boost, and 3D Virtualizer',
      'Audio Crossfade (1.0s to 12.0s duration) and bit-perfect Gapless Playback',
      'Multilingual personalized discovery covering Tamil, English, Hindi, Korean, and more',
      'Offline music downloading engine with dedicated local library playback',
      'Full playlist management, automated Smart Queue recommendations, and sleep timer'
    ],
    applications: [
      'High-fidelity personal and studio music playback on desktop systems',
      'Karaoke performance and synchronized lyric sing-alongs with instant line seek',
      'Custom acoustic equalization tailored to specific headphones and sound systems',
      'Offline media playback without continuous internet connectivity'
    ],
    techSpecs: {
      'Frontend Framework': 'Flutter Desktop Windows Native Shell (High-DPI Render Engine)',
      'Audio Core': 'LibMPV-2 Hardware Audio Pipeline with Sub-millisecond Seek Accuracy',
      'Audio Processing': '10-Band Frequency Biquad Filters (31Hz – 16kHz), 3D Spatial Virtualizer',
      'Supported OS': 'Windows 10/11 (x64 Installer Package with all DLLs bundled)',
      'Package Format': 'Self-Extracting Inno Setup Installer'
    },
    downloads: [
      { name: 'Windows Setup Installer (.exe)', file: 'NfyniQ_Music_Setup.exe', size: '34.6 MB', path: 'https://github.com/Jerfynn/NfyniQ/releases/download/v1.0.0/NfyniQ_Music_Setup.exe' }
    ],
    releaseNotes: [
      'Line-by-line real-time synchronized lyrics with tap-to-seek',
      '10-Band hardware-calibrated Graphic Equalizer with bass boost',
      'Gapless playback and customizable crossfade transitions (1.0s - 12.0s)',
      'Offline music caching and multilingual smart recommendations'
    ],
    dlTags: ['Windows 10/11 x64', 'Installer'],
    docId: 'youtify-manual'
  }
];
