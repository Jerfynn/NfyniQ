import aiStudioMain from '../assets/products/ai_studio_main.png';
import nfyndownMain from '../assets/products/nfyndown_main.png';
import nfyndownSettings from '../assets/products/nfyndown_settings.png';
import nfyndownSplash from '../assets/products/nfyndown_splash.png';
import musicMain from '../assets/products/music_main.png';
import musicSearch from '../assets/products/music_search.png';
import musicSetup from '../assets/products/music_setup.png';
import sonarRadar from '../assets/products/sonar_radar.png';
import sonarDashboard from '../assets/products/sonar_dashboard.png';

export const productsData = [
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
    docId: 'install'
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
      'Core Engine': 'Standalone Multithreaded Python/Qt Client with Asynchronous I/O',
      'Transcoding Engine': 'FFmpeg Core with MP4/MKV/MP3/FLAC encoding pipelines',
      'Network Protocols': 'HTTP/HTTPS, HLS (m3u8), DASH, WebSocket segments',
      'Supported OS': 'Windows 10/11 (x64 Standalone Executable)',
      'Installation': 'No dependencies needed — ready to run out of the box'
    },
    downloads: [
      { name: 'Windows Standalone Executable (.exe)', file: 'NfynDown.exe', size: '54.2 MB', path: 'https://github.com/Jerfynn/NfyniQ/releases/download/v1.0.0/NfynDown.exe' }
    ],
    docId: 'nfyndown-intro'
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
    docId: 'youtify-manual'
  }
];
