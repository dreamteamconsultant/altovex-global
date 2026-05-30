"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Bot, Sparkles, Zap, MessageCircleMore, X } from 'lucide-react';

type Message = { role: 'user' | 'assistant'; text: string };

export default function SiteChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  const quickPrompts = useMemo(
    () => [
      'What services does Altovex offer?',
      'How do I contact the team?',
      'Which countries do you operate in?',
    ],
    [],
  );

  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        text: 'Hi, I am the Altovex site assistant. Ask about services, routes, contact info, or where to find anything on the website.',
      },
    ]);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, open]);

  async function send() {
    if (!input.trim()) return;
    const q = input.trim();
    setMessages((m) => [...m, { role: 'user', text: q }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/site-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q }),
      });

      const data = await res.json();
      if (data?.answer) {
        setMessages((m) => [...m, { role: 'assistant', text: data.answer }]);
      } else {
        setMessages((m) => [...m, { role: 'assistant', text: 'Sorry, I could not find a good answer.' }]);
      }
    } catch (err) {
      setMessages((m) => [...m, { role: 'assistant', text: 'Error searching site: ' + String(err) }]);
    } finally {
      setLoading(false);
    }
  }

  function askPrompt(prompt: string) {
    setInput(prompt);
    void sendWithText(prompt);
  }

  async function sendWithText(text: string) {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: 'user', text: q }]);
    setLoading(true);

    try {
      const res = await fetch('/api/site-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q }),
      });

      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          text: data?.answer || 'I could not find a clear answer in the site files.',
        },
      ]);
    } catch (err) {
      setMessages((m) => [...m, { role: 'assistant', text: 'Error searching site: ' + String(err) }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="fixed bottom-6 right-6 z-40 lg:bottom-12 lg:right-12 xl:bottom-20 xl:right-20">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open site chat"
          className="group inline-flex h-12 sm:h-14 items-center gap-3 rounded-full border border-white/10 bg-gradient-to-r from-primary to-[#1e7bcb] px-4 sm:px-5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
            <Bot size={18} />
          </span>
          <span className="hidden sm:inline">Ask Altovex AI</span>
          <span className="sm:hidden">Chat</span>
          <Sparkles size={16} className="opacity-80 transition-transform group-hover:rotate-12" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/45 p-3 backdrop-blur-[6px] sm:p-4">
          <div className="relative w-full max-w-xl overflow-hidden rounded-[1.6rem] border border-white/10 bg-card shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[#1e7bcb] to-[#12b886]" />

            <div className="flex items-center justify-between gap-3 border-b border-border/70 bg-background/70 px-4 py-4 backdrop-blur-xl sm:px-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                  <MessageCircleMore size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-wide sm:text-base">Altovex AI Assistant</h3>
                  <p className="text-xs text-muted-foreground">Fast answers for pages, services, contact, and support</p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto px-4 py-4 sm:px-5">
              <div className="mb-4 grid gap-2 sm:grid-cols-3">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => askPrompt(prompt)}
                    className="flex min-h-12 items-center justify-between gap-2 rounded-2xl border border-border bg-background px-3 py-3 text-left text-xs font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    <span>{prompt}</span>
                    <ArrowRight size={14} className="shrink-0 text-muted-foreground" />
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[88%] rounded-3xl px-4 py-3 text-sm leading-6 shadow-sm sm:max-w-[80%] ${
                        m.role === 'user'
                          ? 'rounded-br-md bg-primary text-primary-foreground'
                          : 'rounded-bl-md border border-border/70 bg-background text-foreground/90'
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="inline-flex items-center gap-2 rounded-3xl rounded-bl-md border border-border/70 bg-background px-4 py-3 text-sm text-muted-foreground">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                      Searching site files...
                    </div>
                  </div>
                )}
                <div ref={endRef} />
              </div>
            </div>

            <div className="border-t border-border/70 bg-background/90 px-4 py-4 backdrop-blur-xl sm:px-5">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      void send();
                    }
                  }}
                  placeholder="Ask about pages, services, contact, or where to find things..."
                  className="flex-1 rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring/40"
                />
                <button
                  onClick={send}
                  disabled={loading}
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition-transform active:scale-95 disabled:opacity-50"
                >
                  {loading ? 'Searching…' : 'Ask'}
                </button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Tip: use the quick prompts above for instant answers.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
