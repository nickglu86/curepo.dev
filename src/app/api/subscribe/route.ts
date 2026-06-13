import type { NextRequest } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let email: string | undefined;
  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim() : undefined;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!email || !EMAIL_RE.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.SUBSCRIBE_NOTIFY_TO;
  // Until you verify your own domain in Resend, this default only works when
  // `to` is the email of your Resend account. Swap to e.g. "curepo <hello@curepo.dev>".
  const from = process.env.SUBSCRIBE_FROM ?? "curepo <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error(
      "Newsletter not configured: missing RESEND_API_KEY or SUBSCRIBE_NOTIFY_TO",
    );
    return Response.json(
      { error: "Subscriptions are temporarily unavailable." },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: "New curepo subscriber 🎉",
      text: `Someone just subscribed to curepo:\n\n${email}\n\nTime: ${new Date().toISOString()}`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Resend send failed:", res.status, detail);
    return Response.json(
      { error: "Could not complete subscription. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
