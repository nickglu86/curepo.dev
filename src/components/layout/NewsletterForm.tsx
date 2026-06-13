"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  NewsletterForm as Form,
  EmailInput,
  SubscribeBtn,
  StatusText,
} from "./Footer.styles";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (res.ok) {
        setStatus("success");
        setMessage("Thanks! You're on the list.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <EmailInput
        type="email"
        placeholder="Email address"
        aria-label="Email address"
        required
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        disabled={status === "loading"}
      />
      <SubscribeBtn type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Subscribing…" : "Subscribe"}
      </SubscribeBtn>
      {message && (
        <StatusText
          role="status"
          $variant={status === "error" ? "error" : "success"}
        >
          {message}
        </StatusText>
      )}
    </Form>
  );
}
