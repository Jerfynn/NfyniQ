import React, { useState, useEffect, useRef } from 'react';
import { Download, ChevronRight, Wifi, WifiOff, FileUp, Users, Clock, Repeat, MousePointerClick } from 'lucide-react';
import { productsData } from '../data/productsData';
import mascots from '../data/mascots.json';
import '../mascots.css';
import '../new-releases.css';

// Real companion artwork from Smart Reminder Assistant (rendered from the app's own code)
const CREW = [
  { id: 'sparky', name: 'Sparky', blurb: 'Hover robot', svg: mascots[0], drop: 120 },
  { id: 'mochi', name: 'Mochi', blurb: 'Cosmic cat', svg: mascots[1], drop: 60 },
  { id: 'weaver', name: 'Weaver', blurb: 'Clockwork spider', svg: mascots[2], drop: 150 },
  { id: 'dash', name: 'Dash', blurb: 'Masked acrobat', svg: mascots[3], drop: 90 }
];

const PHRASES = [
  { typed: 'stretch in 45 min', parsed: 'Stretch, in 45 minutes' },
  { typed: 'standup at 4:30 pm', parsed: 'Standup, today at 4:30 PM' },
  { typed: 'every 30 mins: eye break', parsed: 'Eye break, repeats every 30 min' }
];

const NewReleases = ({ onSelectProduct }) => {
  const chat = productsData.find(p => p.id === 'nfyniq-chat');
  const reminder = productsData.find(p => p.id === 'smart-reminder');
  const [hop, setHop] = useState(null);
  const [phrase, setPhrase] = useState(0);
  const [live, setLive] = useState(false);
  const crewRef = useRef(null);

  // Drop the companions in when the section scrolls into view
  useEffect(() => {
    const el = crewRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setLive(true); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) { setLive(true); io.disconnect(); }
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!chat || !reminder) return null;

  const sayHi = (id) => {
    setHop(null);
    requestAnimationFrame(() => setHop(id));
  };

  return (
    <section className="nr-section section-container" aria-labelledby="nr-title">
      <div className="section-header-centered">
        <div className="section-badge">Just Released</div>
        <h2 id="nr-title" className="section-title">Two new apps for your Windows desk</h2>
        <p className="section-subtitle">
          A messenger that never needs the internet, and a reminder app with a little personality. Both free.
        </p>
      </div>

      <div className="nr-grid">
        {/* ---------- NfyniQ Chat ---------- */}
        <article className="nr-card nr-chat">
          <div className="nr-card-head">
            <img src={chat.icon} alt="" width="56" height="56" className="nr-app-icon" />
            <div>
              <h3 className="nr-name">{chat.name}</h3>
              <span className="nr-ver">{chat.version} for Windows 10 and 11</span>
            </div>
          </div>

          <p className="nr-pitch">Text and share files with everyone on the same Wi‑Fi. No internet, no accounts — nothing leaves the building.</p>

          <ul className="nr-points">
            <li><WifiOff size={16} /><span>Works with the internet switched off</span></li>
            <li><Users size={16} /><span>People nearby appear on their own</span></li>
            <li><FileUp size={16} /><span>Drag in files of any size</span></li>
          </ul>

          <div className="nr-actions">
            <a className="nr-btn nr-btn-chat" href={chat.downloads[0].path}>
              <Download size={17} />
              <span>Download<small>{chat.downloads[0].size}</small></span>
            </a>
            <button type="button" className="nr-btn-ghost" onClick={() => onSelectProduct(chat)}>
              <span>Details</span><ChevronRight size={15} />
            </button>
          </div>

          <div className="nr-chat-shot">
            <div className="nr-net-pill"><Wifi size={13} /><span>3 online on this network</span></div>
            <img src={chat.gallery[0]} alt="NfyniQ Chat showing a conversation where CAD and CSV files were shared over the local network" loading="lazy" />
          </div>
        </article>

        {/* ---------- Smart Reminder Assistant ---------- */}
        <article className="nr-card nr-reminder">
          <div className="nr-web" aria-hidden="true">
            <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth=".7">
              <g transform="translate(200 0)">
                <path d="M0 0 L-200 40 M0 0 L-190 110 M0 0 L-150 170 M0 0 L-90 200 M0 0 L-20 200" />
                <path d="M-40 8 Q-36 20 -38 22 Q-28 30 -18 34 Q-14 38 -4 40" />
                <path d="M-90 18 Q-84 44 -86 50 Q-64 66 -40 76 Q-30 84 -9 90" />
                <path d="M-140 28 Q-132 68 -134 78 Q-100 104 -64 118 Q-48 132 -15 140" />
                <path d="M-190 38 Q-180 96 -182 106 Q-138 142 -88 160 Q-66 178 -20 188" />
              </g>
            </svg>
          </div>

          <div className="nr-card-head">
            <img src={reminder.icon} alt="" width="56" height="56" className="nr-app-icon" />
            <div>
              <h3 className="nr-name">{reminder.name}</h3>
              <span className="nr-ver">{reminder.version} for Windows 10 and 11</span>
            </div>
          </div>

          <p className="nr-pitch">Type it the way you’d say it. When it’s due, a companion drops down on a silk thread to tell you.</p>

          <div className="nr-typer" role="group" aria-label="Examples of reminders you can type">
            {PHRASES.map((p, i) => (
              <button
                key={p.typed}
                type="button"
                className={`nr-phrase ${phrase === i ? 'active' : ''}`}
                aria-pressed={phrase === i}
                onClick={() => setPhrase(i)}
              >
                <span className="nr-typed">“{p.typed}”</span>
                <span className="nr-parsed">
                  {i === 2 ? <Repeat size={13} /> : <Clock size={13} />}
                  {p.parsed}
                </span>
              </button>
            ))}
          </div>

          <div ref={crewRef} className={`nr-crew ${live ? 'nr-live' : ''}`} aria-label="Companions">
            {CREW.map((c) => (
              <div key={c.id} className="nr-hang" style={{ '--drop': `${c.drop}px` }}>
                <span className="nr-silk" aria-hidden="true" />
                <button
                  type="button"
                  className={`nr-critter ${hop === c.id ? 'hop' : ''}`}
                  onClick={() => sayHi(c.id)}
                  onAnimationEnd={() => setHop(null)}
                  aria-label={`${c.name}, ${c.blurb} — click to say hi`}
                  dangerouslySetInnerHTML={{ __html: c.svg }}
                />
                <span className="nr-crew-name">{c.name}</span>
              </div>
            ))}
            <span className="nr-crew-hint"><MousePointerClick size={13} /> Click one to say hi</span>
          </div>

          <div className="nr-actions">
            <a className="nr-btn nr-btn-reminder" href={reminder.downloads[0].path}>
              <Download size={17} />
              <span>Download<small>{reminder.downloads[0].size}</small></span>
            </a>
            <button type="button" className="nr-btn-ghost" onClick={() => onSelectProduct(reminder)}>
              <span>Details</span><ChevronRight size={15} />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default NewReleases;
