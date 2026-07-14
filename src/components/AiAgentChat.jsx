import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send } from 'lucide-react';

const AiAgentChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      text: 'Greetings! I am the NfyniQ system assistant. Ask me anything about our Sonar Viewer software installation, transducer configurations, or acoustic filters!'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputText
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let agentReply = '';
      const query = userMessage.text.toLowerCase();

      if (query.includes('install') || query.includes('download') || query.includes('platform') || query.includes('os')) {
        agentReply = 'The Sonar Viewer is compatible with Windows, macOS, and Linux. You can download precompiled installers directly from our Downloads tab.';
      } else if (query.includes('transducer') || query.includes('device') || query.includes('hardware') || query.includes('serial')) {
        agentReply = 'To connect, plug in your transducer arrays via serial USB. Run `agy-sonar --device /dev/ttyUSB0 --frequency 33khz` to initialize.';
      } else if (query.includes('ping') || query.includes('api') || query.includes('websocket')) {
        agentReply = 'The Sonar Viewer CLI exposes a WebSocket server on port 8080. Connect using `ws://localhost:8080/sonar` to retrieve distance and echo intensity parameters.';
      } else if (query.includes('filter') || query.includes('clutter') || query.includes('noise')) {
        agentReply = 'You can toggle digital clutter filters on the side control panel or run the CLI filters tool: `agy-sonar --filter thermocline --gain 70`.';
      } else if (query.includes('frequency') || query.includes('gain') || query.includes('range')) {
        agentReply = 'Adjust Receiver Gain, Pulse Frequency (20-80kHz), and Range Bounds (100m-1000m) directly on our visualizer sliders.';
      } else if (query.includes('doc') || query.includes('help')) {
        agentReply = 'Check out our Stripe-styled Documentation section to view details on APIs and CLI commands.';
      } else if (query.includes('robot') || query.includes('auv') || query.includes('rover') || query.includes('dog') || query.includes('quadruped')) {
        agentReply = 'We build and configure autonomous robots including AUVs, land rovers, and quadruped robot dogs, complete with custom control software.';
      } else if (query.includes('software') || query.includes('development') || query.includes('firmware') || query.includes('dashboard')) {
        agentReply = 'NfyniQ specializes in custom software development, low-latency firmware, graphical dashboards, and telemetry ingest engines for physical robots.';
      } else if (query.includes('contact') || query.includes('mail') || query.includes('email')) {
        agentReply = 'You can reach out to our engineering and robotics deck on the Contact page.';
      } else {
        agentReply = 'I am trained specifically on the NfyniQ Sonar Viewer and Robotics. Feel free to ask about "downloads", "robot dogs", "AUVs", "custom software", or "transducers"!';
      }

      const agentMessage = {
        id: Date.now() + 1,
        sender: 'agent',
        text: agentReply
      };

      setMessages((prev) => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1100);
  };

  return (
    <>
      <button 
        className="floating-agent-bubble" 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--teal) 0%, var(--cyan) 100%)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          boxShadow: '0 8px 30px rgba(13, 148, 136, 0.3)',
          zIndex: 1000,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {isOpen ? <X size={24} /> : <Bot size={24} className="float-animation" style={{ stroke: 'white' }} />}
      </button>

      {isOpen && (
        <div 
          className="glass chat-agent-panel" 
          style={{
            position: 'fixed',
            bottom: '92px',
            right: '24px',
            width: '350px',
            height: '460px',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid rgba(13,148,136,0.15)',
            boxShadow: '0 10px 40px rgba(13, 148, 136, 0.08)'
          }}
        >
          {/* Header */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              padding: '12px 16px', 
              borderBottom: '1px solid var(--border-muted)',
              background: 'rgba(13,148,136,0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div 
                style={{ 
                  width: '30px', 
                  height: '30px', 
                  borderRadius: '50%', 
                  background: 'var(--teal)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white'
                }}
              >
                <Bot size={16} style={{ stroke: 'white' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: '700', margin: 0 }}>Sonar Assistant</h4>
                <span style={{ fontSize: '0.68rem', color: 'var(--emerald)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <span style={{ width: '5px', height: '5px', background: 'var(--emerald)', borderRadius: '50%', display: 'inline-block' }}></span>
                  Agent Online
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div 
            style={{ 
              flex: 1, 
              padding: '16px', 
              overflowY: 'auto', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '12px',
              background: '#ffffff'
            }}
          >
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                style={{ 
                  display: 'flex', 
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  width: '100%'
                }}
              >
                <div 
                  style={{
                    maxWidth: '80%',
                    padding: '8px 12px',
                    borderRadius: '12px',
                    fontSize: '0.82rem',
                    lineHeight: '1.4',
                    background: msg.sender === 'user' ? 'rgba(13, 148, 136, 0.08)' : 'var(--bg-tertiary)',
                    border: msg.sender === 'user' ? '1px solid rgba(13, 148, 136, 0.15)' : '1px solid var(--border-muted)',
                    color: 'var(--text-primary)',
                    borderBottomRightRadius: msg.sender === 'user' ? '2px' : '12px',
                    borderBottomLeftRadius: msg.sender === 'user' ? '12px' : '2px',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div className="chat-typing-row" style={{ padding: '6px 12px', borderRadius: '12px', borderBottomLeftRadius: '2px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-muted)' }}>
                  <span className="typing-dot" style={{ width: '5px', height: '5px' }}></span>
                  <span className="typing-dot" style={{ width: '5px', height: '5px' }}></span>
                  <span className="typing-dot" style={{ width: '5px', height: '5px' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form 
            onSubmit={handleSend}
            style={{ 
              display: 'flex', 
              padding: '10px 16px', 
              borderTop: '1px solid var(--border-muted)',
              background: '#ffffff',
              gap: '6px'
            }}
          >
            <input 
              type="text" 
              className="chat-text-input" 
              style={{ padding: '6px 12px', fontSize: '0.82rem', height: '36px' }}
              placeholder="Ask helper a question..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              disabled={isTyping}
            />
            <button 
              type="submit" 
              className="chat-send-btn" 
              style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, var(--teal) 0%, var(--cyan) 100%)', boxShadow: '0 4px 12px rgba(13,148,136,0.2)' }}
              disabled={!inputText.trim() || isTyping}
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AiAgentChat;
