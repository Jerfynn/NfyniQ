import React, { useState, useEffect, useRef } from 'react';
import { Radio, Settings, Activity } from 'lucide-react';

const SonarViewer = () => {
  const canvasRef = useRef(null);
  const [gain, setGain] = useState(70);
  const [range, setRange] = useState(500); 
  const [frequency, setFrequency] = useState(33); 
  const [pingActive, setPingActive] = useState(true);

  const targetsRef = useRef([
    { dist: 0.35, angle: 1.2, size: 5, label: 'Thermocline Boundary' },
    { dist: 0.65, angle: 3.8, size: 6, label: 'Unidentified Seabed Echo' },
    { dist: 0.8, angle: 5.1, size: 4, label: 'Schooling Fish cluster' }
  ]);

  useEffect(() => {
    const handleConfigure = (e) => {
      const { action, value } = e.detail;
      if (action === 'set-gain') {
        setGain(value);
      } else if (action === 'set-range') {
        setRange(value);
      } else if (action === 'set-frequency') {
        setFrequency(value);
      } else if (action === 'set-ping') {
        setPingActive(value);
      }
    };
    window.addEventListener('configure-simulator', handleConfigure);
    return () => window.removeEventListener('configure-simulator', handleConfigure);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let sweepAngle = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
      ctx.fillStyle = '#0a101f';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.min(centerX, centerY) * 0.9;

      // Draw concentric radar lines
      ctx.strokeStyle = 'rgba(13, 148, 136, 0.15)';
      ctx.lineWidth = 1;
      for (let r = 0.2; r <= 1.0; r += 0.2) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, maxRadius * r, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = 'rgba(13, 148, 136, 0.4)';
        ctx.font = '8px var(--font-mono)';
        ctx.fillText(`${Math.round(range * r)}m`, centerX + 4, centerY - maxRadius * r + 10);
      }

      ctx.beginPath(); ctx.moveTo(centerX - maxRadius, centerY); ctx.lineTo(centerX + maxRadius, centerY); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(centerX, centerY - maxRadius); ctx.lineTo(centerX, centerY + maxRadius); ctx.stroke();

      if (pingActive) {
        sweepAngle += 0.015;
        if (sweepAngle > Math.PI * 2) {
          sweepAngle = 0;
        }
      }

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(sweepAngle);

      const gradient = ctx.createRadialGradient(0, 0, 10, 0, 0, maxRadius);
      gradient.addColorStop(0, 'rgba(13, 148, 136, 0.4)');
      gradient.addColorStop(0.2, 'rgba(13, 148, 136, 0.2)');
      gradient.addColorStop(1, 'rgba(13, 148, 136, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, maxRadius, -0.25, 0.05);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = 'rgba(13, 148, 136, 0.8)';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(maxRadius, 0);
      ctx.stroke();

      ctx.restore();

      targetsRef.current.forEach((t) => {
        let diff = sweepAngle - t.angle;
        if (diff < 0) diff += Math.PI * 2;

        if (diff < 1.5) {
          const intensity = 1.0 - diff / 1.5;
          const tX = centerX + Math.cos(t.angle) * maxRadius * t.dist;
          const tY = centerY + Math.sin(t.angle) * maxRadius * t.dist;

          ctx.beginPath();
          ctx.arc(tX, tY, t.size * (gain / 70), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(13, 148, 136, ${intensity})`;
          ctx.shadowBlur = 10 * intensity;
          ctx.shadowColor = '#0d9488';
          ctx.fill();
          ctx.shadowBlur = 0;

          if (diff < 0.3) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.font = '9px var(--font-mono)';
            ctx.fillText(t.label, tX + 10, tY - 4);
            ctx.strokeStyle = 'rgba(255,255,255,0.3)';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(tX, tY);
            ctx.lineTo(tX + 8, tY - 2);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [gain, range, pingActive]);

  return (
    <div className="sonar-grid" style={{ gap: '1.5rem' }}>
      <div className="glass sonar-visualizer-card" style={{ background: '#ffffff', padding: '1.25rem' }}>
        <div className="panel-title" style={{ '--panel-accent': 'var(--teal)', fontSize: '1rem', marginBottom: '0.75rem' }}>
          <Radio size={16} /> Acoustic Scan Scope
        </div>

        <div className="sonar-canvas-container" style={{ height: '320px' }}>
          <canvas ref={canvasRef} className="sonar-canvas" />
        </div>
      </div>

      <div className="glass tech-spec-panel" style={{ background: '#ffffff', padding: '1.25rem' }}>
        <div className="panel-title" style={{ '--panel-accent': 'var(--teal)', fontSize: '1rem', marginBottom: '0.75rem' }}>
          <Settings size={16} /> Signal Calibration
        </div>

        <div className="robot-sliders">
          <div className="robot-slider-group">
            <div className="robot-slider-label">
              <span>Receiver Gain</span>
              <span>{gain}%</span>
            </div>
            <input type="range" className="range-slider" style={{ '--violet': 'var(--teal)' }} min="30" max="100" value={gain} onChange={(e) => setGain(parseInt(e.target.value))} />
          </div>

          <div className="robot-slider-group">
            <div className="robot-slider-label">
              <span>Acoustic Frequency</span>
              <span>{frequency} kHz</span>
            </div>
            <input type="range" className="range-slider" style={{ '--violet': 'var(--teal)' }} min="20" max="80" value={frequency} onChange={(e) => setFrequency(parseInt(e.target.value))} />
          </div>

          <div className="robot-slider-group">
            <div className="robot-slider-label">
              <span>Range Bounds</span>
              <span>{range}m</span>
            </div>
            <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
              {[100, 500, 1000].map((val) => (
                <button key={val} className={`switch-button ${range === val ? 'active' : ''}`} style={{ flex: 1, padding: '5px', fontSize: '0.75rem', '--cyan': 'var(--teal)', '--violet': 'var(--teal)' }} onClick={() => setRange(val)}>
                  {val}m
                </button>
              ))}
            </div>
          </div>

          <div className="robot-slider-group" style={{ marginTop: '0.8rem' }}>
            <button className={`switch-button ${pingActive ? 'active' : ''}`} style={{ width: '100%', '--cyan': 'var(--teal)', '--violet': 'var(--teal)', padding: '8px' }} onClick={() => setPingActive(!pingActive)}>
              <Activity size={14} />
              <span>{pingActive ? 'PING TRANSMITTING' : 'PING SUSPENDED'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SonarViewer;
