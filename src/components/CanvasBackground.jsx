import React, { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle nodes
    const particles = [];
    const particleCount = Math.min(45, Math.floor((width * height) / 30000));
    const connectionDistance = 120;

    // Twinkling stars (background)
    const stars = [];
    const starCount = 35;

    // Mouse glow coordinate coordinates
    const mouse = { x: null, y: null, radius: 180 };

    class Star {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.2 + 0.5;
        this.alpha = Math.random() * 0.4 + 0.1;
        this.alphaSpeed = 0.005 + Math.random() * 0.01;
      }

      update() {
        // Simple alpha twinkling
        this.alpha += this.alphaSpeed;
        if (this.alpha > 0.65 || this.alpha < 0.1) {
          this.alphaSpeed *= -1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(125, 211, 252, ${this.alpha})`; // Indigo twinkling stars
        ctx.fill();
      }
    }

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 2 + 1;
        this.baseColor = Math.random() > 0.5 ? 'rgba(129, 140, 248, 0.22)' : 'rgba(56, 189, 248, 0.22)';
        this.color = this.baseColor;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Interaction with mouse (spotlight push)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 1.0;
            this.y += (dy / dist) * force * 1.0;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Initialize stars & particles
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawLinesAndGlow = () => {
      // 1. Mouse Spotlight Light Overlay (Very subtle radial glow follow-me)
      if (mouse.x !== null && mouse.y !== null) {
        ctx.save();
        const mouseGlow = ctx.createRadialGradient(
          mouse.x, mouse.y, 10,
          mouse.x, mouse.y, mouse.radius
        );
        mouseGlow.addColorStop(0, 'rgba(56, 189, 248, 0.05)');
        mouseGlow.addColorStop(0.5, 'rgba(45, 212, 191, 0.015)');
        mouseGlow.addColorStop(1, 'rgba(7, 12, 24, 0)');
        ctx.fillStyle = mouseGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 2. Neural Connection Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.07;
            ctx.strokeStyle = `rgba(125, 211, 252, ${alpha * 0.8})`;
            ctx.lineWidth = 0.55;

            // Highlight connections close to the mouse spotlight
            if (mouse.x !== null && mouse.y !== null) {
              const mdx1 = particles[i].x - mouse.x;
              const mdy1 = particles[i].y - mouse.y;
              const mdist1 = Math.sqrt(mdx1 * mdx1 + mdy1 * mdy1);

              if (mdist1 < mouse.radius) {
                ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 2.2})`;
                ctx.lineWidth = 0.8;
              }
            }

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Stars
      stars.forEach((s) => {
        s.update();
        s.draw();
      });

      // Particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      drawLinesAndGlow();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="bg-canvas-wrapper">
      <div className="glowing-grid"></div>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
};

export default CanvasBackground;
