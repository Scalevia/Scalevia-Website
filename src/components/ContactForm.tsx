"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck, Loader2, Send } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

type Status = "idle" | "sending" | "success" | "error" | "invalid";

const field =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-fg outline-none transition placeholder:text-muted/70 focus:border-[#3d6fd6] focus:ring-4 focus:ring-[#3d6fd6]/15";

export function ContactForm({ t }: { t: Dictionary }) {
  const c = t.contact;
  const [status, setStatus] = useState<Status>("idle");
  const [startedAt] = useState(() => Date.now());
  const [message, setMessage] = useState("");

  // A pricing button links here with ?plan=<name>; start the message with it
  useEffect(() => {
    const plan = new URLSearchParams(window.location.search).get("plan");
    if (plan) setMessage(c.form.planPrefill.replace("{plan}", plan.slice(0, 40)));
  }, [c.form.planPrefill]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (!data.name?.trim() || !data.email?.trim() || !data.phone?.trim()) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale: document.documentElement.lang, elapsed: Date.now() - startedAt }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      form.reset();
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative rounded-3xl border border-line bg-surface-2 p-5 sm:p-7">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex h-full min-h-[420px] flex-col items-center justify-center p-6 text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#28c840]/15">
              <CircleCheck className="h-8 w-8 text-[#28c840]" />
            </span>
            <p className="mt-5 max-w-sm text-lg font-semibold">{c.form.success}</p>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
            {/* Honeypot for bots */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            <Field label={c.form.name}>
              <input name="name" required autoComplete="name" className={field} />
            </Field>
            <Field label={c.form.email}>
              <input name="email" type="email" required autoComplete="email" dir="ltr" className={field} />
            </Field>
            <Field label={c.form.phone}>
              <input name="phone" type="tel" required autoComplete="tel" dir="ltr" className={field} />
            </Field>
            <Field label={c.form.company}>
              <input name="company" autoComplete="organization" className={field} />
            </Field>
            <Field label={c.form.service} full>
              <select name="service" defaultValue="" className={field}>
                <option value="" disabled>
                  {c.form.servicePlaceholder}
                </option>
                {c.form.services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={c.form.message} full>
              <textarea
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${field} resize-none`}
                  />
            </Field>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-fg font-semibold text-bg transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> {c.form.sending}
                  </>
                ) : (
                  <>
                    {c.form.submit}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
                  </>
                )}
              </button>
              {(status === "error" || status === "invalid") && (
                <p role="alert" className="mt-3 text-sm text-red-600 dark:text-red-400">
                  {status === "invalid" ? c.form.required : c.form.error}
                </p>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, full, children }: { label: string; full?: boolean; children: React.ReactNode }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
    </label>
  );
}
