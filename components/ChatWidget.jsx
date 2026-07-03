'use client';

import { useState, useRef, useEffect } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '$ support --init\nHey, I can help with questions about the prompt pack. What do you need?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();

      if (data.error) throw new Error(data.error);

      setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages([
        ...newMessages,
        { role: 'assistant', content: 'error: failed to reach support. try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div style={styles.wrapper}>
      {isOpen ? (
        <div style={styles.panel}>
          <div style={styles.header}>
            <span style={styles.headerText}>~/support --chat</span>
            <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>
              [x]
            </button>
          </div>

          <div ref={scrollRef} style={styles.messages}>
            {messages.map((m, i) => (
              <div key={i} style={m.role === 'user' ? styles.userLine : styles.assistantLine}>
                <span style={styles.prompt}>{m.role === 'user' ? '> ' : '$ '}</span>
                <span style={{ whiteSpace: 'pre-wrap' }}>{m.content}</span>
              </div>
            ))}
            {loading && <div style={styles.thinking}>$ thinking...</div>}
          </div>

          <div style={styles.inputRow}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="ask something..."
              style={styles.input}
              disabled={loading}
            />
            <button onClick={sendMessage} disabled={loading} style={styles.sendBtn}>
              [enter]
            </button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} style={styles.toggleBtn}>
          $ support --help
        </button>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    zIndex: 9999,
    fontFamily: 'var(--font-jetbrains-mono), monospace',
  },
  toggleBtn: {
    background: '#000',
    border: '1px solid rgba(34,197,94,0.4)',
    color: '#4ade80',
    borderRadius: '6px',
    padding: '10px 16px',
    fontSize: '13px',
    fontFamily: 'inherit',
    cursor: 'pointer',
    boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
  },
  panel: {
    width: '360px',
    height: '448px',
    background: '#000',
    border: '1px solid rgba(34,197,94,0.4)',
    borderRadius: '6px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 12px',
    borderBottom: '1px solid rgba(34,197,94,0.3)',
    background: '#09090b',
  },
  headerText: { color: '#4ade80', fontSize: '12px' },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: '#71717a',
    fontSize: '12px',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  messages: {
    flex: 1,
    overflowY: 'auto',
    padding: '8px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    fontSize: '14px',
  },
  userLine: { color: '#22d3ee' },
  assistantLine: { color: '#4ade80' },
  prompt: { color: '#52525b' },
  thinking: { color: '#71717a', fontSize: '12px' },
  inputRow: {
    borderTop: '1px solid rgba(34,197,94,0.3)',
    padding: '8px',
    display: 'flex',
    gap: '8px',
  },
  input: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#4ade80',
    fontSize: '14px',
    fontFamily: 'inherit',
  },
  sendBtn: {
    background: 'none',
    border: 'none',
    color: '#4ade80',
    fontSize: '12px',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
};