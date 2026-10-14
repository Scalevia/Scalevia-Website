import { NextResponse } from "next/server";

// Forwards contact-form submissions to a Google Apps Script web app,
// which appends a row to the Google Sheet and emails the team.
// Setup: docs/google-apps-script.gs

const MAX = { name: 120, email: 160, phone: 40, company: 160, service: 120, message: 4000 };
type Key = keyof typeof MAX;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Bots: filled honeypot or submitted faster than a human could type
  if (body.website || (typeof body.elapsed === "number" && body.elapsed < 2500)) {
    return NextResponse.json({ ok: true });
  }

  const data = {} as Record<Key, string>;
  for (const key of Object.keys(MAX) as Key[]) {
    const value = typeof body[key] === "string" ? (body[key] as string).trim() : "";
    data[key] = value.slice(0, MAX[key]);
  }

  if (!data.name || !data.phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 422 });
  }

  const url = process.env.GOOGLE_SCRIPT_URL;
  if (!url) {
    console.error("[contact] GOOGLE_SCRIPT_URL is not set");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        locale: body.locale === "en" ? "en" : "ar",
        secret: process.env.CONTACT_SECRET ?? "",
        submittedAt: new Date().toISOString(),
      }),
      redirect: "follow",
    });
    const text = await res.text();
    let result: { ok?: boolean; error?: string } | null = null;
    try {
      result = JSON.parse(text);
    } catch {}
    // HTML instead of JSON usually means the deployment's access isn't set to "Anyone".
    if (!res.ok || !result?.ok) {
      throw new Error(`Apps Script responded ${res.status}: ${result?.error ?? text.slice(0, 200)}`);
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] forward failed", error);
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
  }
}
