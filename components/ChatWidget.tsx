"use client";

import { useEffect, useId, useRef, useState } from "react";
import { getBotReply, quickReplies, type BotLink } from "@/lib/chatbot";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
  links?: BotLink[];
};

const WELCOME: Message = {
  id: 0,
  from: "bot",
  text:
    "Hi! I'm the Belleza Salon assistant 👋 Ask about a service, its price, our location, or how to book.",
};

let nextId = 1;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Message = { id: nextId++, from: "user", text: trimmed };
    const reply = getBotReply(trimmed);
    const botMsg: Message = { id: nextId++, from: "bot", text: reply.text, links: reply.links };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <div className="chat-widget">
      {open && (
        <div
          className="chat-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
        >
          <header className="chat-panel-header">
            <div>
              <span className="chat-avatar" aria-hidden="true">
                B
              </span>
              <span>
                <strong id={titleId}>Belleza Assistant</strong>
                <small>Usually replies instantly</small>
              </span>
            </div>
            <button
              type="button"
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </header>

          <div className="chat-messages" ref={listRef} aria-live="polite">
            {messages.map((m) => (
              <div key={m.id} className={`chat-bubble chat-bubble-${m.from}`}>
                <p>{m.text}</p>
                {m.links && m.links.length > 0 && (
                  <div className="chat-links">
                    {m.links.map((link) => (
                      <a key={link.href + link.label} href={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="chat-quick-replies">
            {quickReplies.map((q) => (
              <button key={q.label} type="button" onClick={() => send(q.prompt)}>
                {q.label}
              </button>
            ))}
          </div>

          <form
            className="chat-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <label htmlFor="chat-input" className="sr-only">
              Message the assistant
            </label>
            <input
              id="chat-input"
              ref={inputRef}
              type="text"
              placeholder="Ask about a service or price…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" aria-label="Send message">
              ↗
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="chat-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close chat assistant" : "Chat with Belleza Salon"}
      >
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}
